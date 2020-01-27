import React from "react";
import { Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import base from "../base";
import uniqid from "uniqid";

class App extends React.Component {
  state = {
    uid: null,
    projects: {
      project3h304m5e: {
        name: "Home",
        icon: {
          color: "#7b748d",
          name: "fa-calendar"
        },
        tasks: {}
      }
    },
    redirect: "/"
  };

  componentDidMount = () => {
    // this.ref = base.syncState(`${uid}/projects`, {
    //   context: this,
    //   state: "projects"
    // });
    localStorage.removeItem('uid');
  };
  
  componentWillMount = () => {
    const uid = JSON.parse(localStorage.getItem('uid'));
  
    this.updateUserId(uid);
  }

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
    projects[`${this.props.match.params.projectId}`].tasks[
      `${uniqid("task")}`
    ] = task;

    //2) Set task object to the stae
    this.setState({ projects });
  };

  updateUserId = uid => {
    //1) Take a copy of the existing state
    this.setState({ uid: uid})
  }

  updateUrl = id => {
    //1) Update the url
    this.props.history.push(id);
  };

  render() {
    if (!this.state.uid) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <Home
        projectId={this.props.match.params.projectId}
        addProject={this.addProject}
        addTask={this.addTask}
        projects={this.state.projects}
        updateUrl={this.updateUrl}
      />
    );
  }
}

export default App;
