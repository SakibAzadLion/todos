import React from "react";

class TaskItem extends React.Component {
  render() {
    return (
      <li className="task__item">
        <div className="check__box">
          <div className="checker">
            <i className="fa fa-check"></i>
          </div>
        </div>
        <div className="task__content">
          <div className="tesk__text">How are you what are you doing</div>
          <div className="tesk__timer">5 Mar 2045</div>
        </div>
      </li>
    );
  }
}

export default TaskItem;
