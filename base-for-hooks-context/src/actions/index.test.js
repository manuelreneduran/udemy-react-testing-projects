import { correctGuess, actionTypes } from './index';

describe('correctGuess', () => {
  test('returns an action with type "correct guess"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
  })
})