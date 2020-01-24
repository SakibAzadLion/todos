import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="container">
          <div className="content">
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;