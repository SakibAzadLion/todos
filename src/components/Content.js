import React from "react";
import TaskItem from "./TaskItem";
import "font-awesome/css/font-awesome.min.css";

class Content extends React.Component {
  render() {
    const tasks = this.props.projects[`${this.props.projectId}`].tasks;

    if (tasks) {
      return (
        <div className="main__content">
          <h2>Today</h2>
          <ul className="task__list">
            {Object.keys(tasks).map(key => (
              <TaskItem key={key} task={tasks[key]} />
            ))}
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
}

export default Content;
