import React from "react";
import { BeatLoader } from "react-spinners";
import TaskItem from "./TaskItem";
import "font-awesome/css/font-awesome.min.css";

class Content extends React.Component {
  render() {

    if (Object.keys(this.props.projects).length > 0) {
      const projectName = this.props.projects[`${this.props.projectId}`].name;
      const tasks = { ...this.props.projects[`${this.props.projectId}`].tasks };

      if (tasks) {
        return (
          <div className="main__content">
            <h2>{projectName}</h2>
            <ul className="task__list">
              {Object.keys(tasks).map(key => (
                <TaskItem
                  key={key}
                  index={key}
                  task={tasks[key]}
                  removeTask={this.props.removeTask}
                />
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

    return (
      <div className="main__content">
        {this.props.loading ? (
          <BeatLoader
            size={10}
            //size={"150px"} this also works
            color={"#926cbc"}
            loading={this.props.loading}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Content;
