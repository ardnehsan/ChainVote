import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <h4>
        <strong>Campaign:</strong>
      </h4>
      <input
        className="form-control"
        type="text"
        value={props.q}
        name="q"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>Members:</strong>
      </h4>
      <input
        className="form-control"
        type="number"
        value={props.start_year}
        name="start_year"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Vote
      </button>
    </div>
  </form>
);

export default Form;
