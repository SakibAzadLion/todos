import React from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import Home from "./Home";
import base from "../base";
import uniqid from "uniqid";

class App extends React.Component {
  state = {
    uid: null,
    projects: {},
    redirect: "/",
    loading: true
  };

  componentDidMount = async () => {
    if (this.state.uid) {
      this.ref = await base.syncState(`${this.state.uid}`, {
        context: this,
        state: "projects"
      });

      const obj = {
        project3h304m5e: {
          name: "Today",
          icon: {
            color: "#7b748d",
            name: "fa-calendar"
          },
          tasks: {}
        }
      };

      this.setState({ projects: { ...obj } });
    }

    localStorage.removeItem("uid");
  };

  componentWillMount = () => {
    const uid = JSON.parse(localStorage.getItem("uid"));

    this.updateUserId(uid);
  };

  componentWillUnmount() {
    // base.removeBinding(this.ref);
  }

  addProject = project => {
    //1) Take a copy of the existing state
    const projects = { ...this.state.projects };

    //2) Add project to the current state object
    projects[`${uniqid("project")}`] = project;

    //3) Set project object to the state
    this.setState({ projects });
  };

  removeProject = key => {
    //1) Take a copy of the existing state
    const projects = { ...this.state.projects };

    //2) Remove the task by setting it to null
    projects[key] = null;

    //2) Set task object to the state
    this.setState({ projects });
  };

  addTask = task => {
    //1) Take a copy of the existing state
    const projects = { ...this.state.projects };

    //2) If tasks object is there then add the task
    //   else add tasks object then add the task 
    if (
      projects[`${this.props.match.params.projectId}`].hasOwnProperty("tasks")
    ) {
      // Add task to the current state object
      projects[`${this.props.match.params.projectId}`].tasks[
        `${uniqid("task")}`
      ] = task;
    } else {
      //Empty task object
      const obj = {
        tasks: {}
      };

      // Add task to the current state object
      obj.tasks[`${uniqid("task")}`] = task;

      //2) Add task to the current state object
      projects[`${this.props.match.params.projectId}`] = { ...obj };
    }

    //2) Set task object to the state
    this.setState({ projects });
  };

  removeTask = key => {
    //1) Take a copy of the existing state
    const projects = { ...this.state.projects };

    //2) Remove the task by setting it to null
    projects[`${this.props.match.params.projectId}`].tasks[key] = null;

    //2) Set task object to the state
    this.setState({ projects });
  };

  updateUserId = uid => {
    //1) Take a copy of the existing state
    this.setState({ uid: uid });
  };

  updateUrl = id => {
    //1) Update the url
    this.props.history.push(id);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    window.s = this.state;
    if (!this.state.uid) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <Home
        projectId={this.props.match.params.projectId}
        loading={this.state.loading}
        addProject={this.addProject}
        removeProject={this.removeProject}
        addTask={this.addTask}
        removeTask={this.removeTask}
        projects={this.state.projects}
        updateUrl={this.updateUrl}
        logout={this.logout}
      />
    );
  }
}

export default App;
