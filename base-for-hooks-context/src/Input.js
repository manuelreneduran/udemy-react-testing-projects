import React from "react";
import { connect } from "react-redux";

import { guessWord } from './actions/index';

class Input extends React.Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          placeholder="enter guess"
          className="mb-2 mx-sm-3"
          data-test="input-box"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
    return (
      <div data-test="component-input">
        {contents}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};



export default connect(mapStateToProps, { guessWord })(Input);
