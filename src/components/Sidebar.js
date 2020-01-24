import React from "react";
import 'font-awesome/css/font-awesome.min.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="project__list">
          <li className="project__item">
            <span className="item__icon">
              <i className="fa fa-calendar"></i>
            </span>
            <span className="item__content">
              Today
              <small className="item__counter">2</small>
            </span>
          </li>
          <li className="project__item">
            <span className="item__icon">
              <i className="fa fa-circle"></i>
            </span>
            <span className="item__content">
              Project 1<small className="item__counter">2</small>
            </span>
          </li>
          <li className="project__item">
            <span className="item__icon">
              <i className="fa fa-circle"></i>
            </span>
            <span className="item__content">
              Welcome
              <small className="item__counter">2</small>
            </span>
          </li>
          <li className="project__item">
            <span className="item__icon">
              <i className="fa fa-circle"></i>
            </span>
            <span className="item__content">
              Yesterday
              <small className="item__counter">2</small>
            </span>
          </li>
          <li className="project__item">
            <span className="item__icon">
              <i className="fa fa-circle"></i>
            </span>
            <span className="item__content">
              Good Day
              <small className="item__counter">2</small>
            </span>
          </li>
        </ul>
        <button className="add_project__btn">
          <i className="fa fa-plus pro__plus"></i>Add Project
        </button>
      </div>
    );
  }
}

export default Sidebar;