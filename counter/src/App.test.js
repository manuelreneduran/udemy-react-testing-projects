import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a shallow wrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * return {ShallowWrapper}

*/
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}

/**
 * Return ShallowWrapper containing nodes  with the given data-test value.
 * @param {ShalloWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {*} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

test('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  const app = findByTestAttr(wrapper, 'component-app')
  expect(app.length).toBe(1);
})

test('renders increment button', () => {
  const wrapper = shallow(<App/>);
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = shallow(<App/>);
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
})

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter })

  //find button and click
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click');

  //find button and display value
  //looks for the value of counter rather than the full text so as to avoid being brittle
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter + 1);
})

test('clicking decrement button decrements counter', () => {
  const wrapper = setup();
  const counter = 8;
  wrapper.setState( {counter });

  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
})

test('an error is displayed if user tries to decrement below zero', () => {
  const wrapper = setup();
  wrapper.setState({ counter: 0 });

  let errorDisplay = findByTestAttr(wrapper, 'error-display');
  expect(errorDisplay.length).toEqual(0);

  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  errorDisplay = findByTestAttr(wrapper, 'error-display');
  expect(errorDisplay.length).toEqual(1);
})