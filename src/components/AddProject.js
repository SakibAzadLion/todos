import React from "react";
import Dropdown from "./Dropdown";
import "font-awesome/css/font-awesome.min.css";

class AddProject extends React.Component {
  nameRef = React.createRef();

  handleSubmit = e => {
    //1) Prevent browser from submiting
    e.preventDefault();

    //2) Create project object
    const project = {
      name: this.nameRef.current.value,
      icon: {
        color: this.props.projectInfo.color,
        name: "fa-circle"
      },
      tasks: {}
    };

    //3) Add project to the state
    this.props.addProject(project);

    //3) Toogle project state
    this.props.toggleClickState("Project");
  };

  render() {
    return (
      <div className="add_project__modal">
        <div className="add__project">
          <form className="add_project__form" onSubmit={this.handleSubmit}>
            <h2>Add Project</h2>
            <input type="text" ref={this.nameRef} placeholder="Project Name" />

            <Dropdown
              isDropdownClicked={this.props.isDropdownClicked}
              projectInfo={this.props.projectInfo}
              toggleClickState={this.props.toggleClickState}
              updateProjectInfo={this.props.updateProjectInfo}
            />

            <div className="project__footer">
              <button type="submit" className="add_project__add">
                Add
              </button>
              <button
                className="add_project__cancel"
                onClick={() => this.props.toggleClickState("Project")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProject;
