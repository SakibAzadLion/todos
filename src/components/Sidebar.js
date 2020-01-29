import React from "react";
import ProjectItem from "./ProjectItem";
import "font-awesome/css/font-awesome.min.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="project__list">
          {Object.keys(this.props.projects).map(key => (
            <ProjectItem
              key={key}
              index={key}
              projectId={this.props.projectId}
              project={this.props.projects[key]}
              updateUrl={this.props.updateUrl}
              removeProject={this.props.removeProject}
            />
          ))}
        </ul>
        <button
          className="add_project__btn"
          onClick={() => this.props.toggleClickState("Project")}
        >
          <i className="fa fa-plus pro__plus"></i>Add Project
        </button>
      </div>
    );
  }
}

export default Sidebar;
