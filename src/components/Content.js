import React from "react";
import 'font-awesome/css/font-awesome.min.css';

class Content extends React.Component {
  render() {
    return (
      <div className="main__content">
        <h2>Today</h2>
        <ul className="task__list">
          <li className="task__item">
            <div className="check__box">
              <div className="checker">
                <i className="fa fa-check"></i>
              </div>
            </div>
            <div className="task__content">
              <div className="tesk__text">How are you what are you doing</div>
              <div className="tesk__timer">5 Mar 2045</div>
            </div>
          </li>
          <li className="task__item">
            <div className="check__box">
              <div className="checker">
                <i className="fa fa-check"></i>
              </div>
            </div>
            <div className="task__content">
              <div className="tesk__text">How are you what are you doing</div>
              <div className="tesk__timer">5 Mar 2045</div>
            </div>
          </li>
          <li className="task__item">
            <div className="check__box">
              <div className="checker">
                <i className="fa fa-check"></i>
              </div>
            </div>
            <div className="task__content">
              <div className="tesk__text">How are you what are you doing</div>
              <div className="tesk__timer">5 Mar 2045</div>
            </div>
          </li>
          <li className="task__item">
            <div className="check__box">
              <div className="checker">
                <i className="fa fa-check"></i>
              </div>
            </div>
            <div className="task__content">
              <div className="tesk__text">How are you what are you doing</div>
              <div className="tesk__timer">5 Mar 2045</div>
            </div>
          </li>
          <li className="task__item">
            <div className="check__box">
              <div className="checker">
                <i className="fa fa-check"></i>
              </div>
            </div>
            <div className="task__content">
              <div className="tesk__text">How are you what are you doing</div>
              <div className="tesk__timer">5 Mar 2045</div>
            </div>
          </li>
          <li className="task__item">
            <div className="check__box">
              <div className="checker">
                <i className="fa fa-check"></i>
              </div>
            </div>
            <div className="task__content">
              <div className="tesk__text">How are you what are you doing</div>
              <small className="tesk__timer">5 Mar 2045</small>
            </div>
          </li>
        </ul>
        <button className="add__task__btn">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    );
  }
}

export default Content;
