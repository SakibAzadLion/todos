import React from "react";
import "font-awesome/css/font-awesome.min.css";

class ProjectItem extends React.Component {
  render() {
    const colorStyle = {
      color: this.props.project.icon.color
    };

    const length = Object.keys(this.props.project.tasks).length;

    return (
      <li className="project__item">
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
      </li>
    );
  }
}

export default ProjectItem;
