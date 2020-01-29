import React from "react";
import "font-awesome/css/font-awesome.min.css";

class ProjectItem extends React.Component {
  handleClick = e => {
    if (!e.target.matches(".proj_close__btn, .proj_close__btn *")) {
      this.props.updateUrl(this.props.index);
    }
  };

  handleRemove = e => {
    //1) Remove project from the state
    this.props.removeProject(this.props.index);

    //2) Update the url
    this.props.updateUrl("project3h304m5e");
  };

  render() {
    const isActive = this.props.index === this.props.projectId;
    let length = 0;

    const colorStyle = {
      color: this.props.project.icon.color
    };

    if (this.props.project.hasOwnProperty("tasks")) {
      length = Object.keys(this.props.project.tasks).length;
    }

    return (
      <li
        className={`project__item ${isActive ? "project__item--active" : ""}`}
        onClick={this.handleClick}
      >
        <span className="item__icon">
          <i
            className={`fa ${this.props.project.icon.name}`}
            style={colorStyle}
          ></i>
        </span>
        <span className="item__content">
          {this.props.project.name}
          <small className="item__counter">{length}</small>
        </span>
        <span className="proj_close__btn" onClick={this.handleRemove}>
          <i className="fa fa-close"></i>
        </span>
      </li>
    );
  }
}

export default ProjectItem;
