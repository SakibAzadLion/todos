import React from "react";
import "font-awesome/css/font-awesome.min.css";

class Content extends React.Component {
  render() {
    return (
      <div className="main__content">
        <h2>Today</h2>
        <ul className="task__list">
          
        </ul>
        <button
          className="add__task__btn"
          onClick={() => this.props.toggleClickState("Task")}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
    );
  }
}

export default Content;
