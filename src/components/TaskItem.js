import React from "react";

class TaskItem extends React.Component {
  render() {
    return (
      <li className="task__item">
        <div className="check__box">
          <div className="checker" onClick={() => this.props.removeTask(this.props.index)}>
            <i className="fa fa-check"></i>
          </div>
        </div>
        <div className="task__content">
          <div className="tesk__text">{this.props.task.desc}</div>
          <div className="tesk__timer">{this.props.task.date}</div>
        </div>
      </li>
    );
  }
}

export default TaskItem;
