import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import AddProject from "./AddProject";
import AddTask from "./AddTask";

class Home extends React.Component {
  state = {
    isProjectClicked: false,
    isTaskClicked: false,
    isDropdownClicked: false,
    projectInfo: {
      color: "#7b748d",
      name: "Biscay"
    }
  };

  toggleClickState = type => {
    //1) Take copy of the existing state
    const state = { ...this.state };

    //2) Change click state
    state[`is${type}Clicked`] = !state[`is${type}Clicked`];

    //3) Set the state
    this.setState({ ...state });
  };

  updateProjectInfo = info => {
    //1) Take copy of the existing state
    let projectInfo = { ...this.state.projectInfo };

    //2) Change click state
    projectInfo = { ...info };

    //3) Set info to the state
    this.setState({ projectInfo });
  };

  render() {
    return (
      <div className="app">
        <Header />

        <div className="container">
          <div className="content">
            <Sidebar
              projects={this.props.projects}
              toggleClickState={this.toggleClickState}
              updateUrl={this.props.updateUrl}
            />
            <Content
              projectId={this.props.projectId}
              projects={this.props.projects}
              toggleClickState={this.toggleClickState}
            />
          </div>
        </div>

        {this.state.isProjectClicked ? (
          <AddProject
            isDropdownClicked={this.state.isDropdownClicked}
            projectInfo={this.state.projectInfo}
            addProject={this.props.addProject}
            toggleClickState={this.toggleClickState}
            updateProjectInfo={this.updateProjectInfo}
          />
        ) : (
          ""
        )}

        {this.state.isTaskClicked ? (
          <AddTask
            addTask={this.props.addTask}
            // isDropdownClicked={this.state.isDropdownClicked}
            // projectInfo={this.state.projectInfo}
            // addProject={this.props.addProject}
            toggleClickState={this.toggleClickState}
            // updateProjectInfo={this.updateProjectInfo}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Home;
