import React from "react";
import Home from "./Home";
import uniqid from "uniqid";

class App extends React.Component {
  state = {
    projects: {
      project3h304m5e: {
        name: "Home",
        icon: {
          color: "#7b748d",
          name: "fa-calendar"
        },
        tasks: {}
      }
    }
  };

  addProject = project => {
    //1) Take a copy of the existing state
    const projects = { ...this.state.projects };

    //2) Add project to the current state object
    projects[`${uniqid("project")}`] = project;

    //3) Set project object to the state
    this.setState({ projects });
  };

  addTask = task => {
    //1) Take a copy of the existing state
    const projects = { ...this.state.projects };

    //2) Add task to the current state object
    projects.project3h304m5e.tasks[`${uniqid("task")}`] = task;

    //2) Set task object to the stae
    this.setState({ projects });
  };

  render() {
    return <Home addProject={this.addProject} addTask={this.addTask} projects={this.state.projects} />;
  }
}

export default App;
