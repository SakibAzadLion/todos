import React from "react";

class Dropdown extends React.Component {
  handleClick = e => {
    //1) Toogle Click State
    this.props.toggleClickState("Dropdown");

    //1) Object with project info
    const projectInfo = {
      color: e.currentTarget.dataset.color,
      name: e.currentTarget.dataset.name
    };

    //1) Object with project info
    this.props.updateProjectInfo(projectInfo);
  };
  render() {
    if (!this.props.isDropdownClicked) {
      return (
        <div className="dropdown" >
          <input
            type="text"
            className="dropdown__input"
            value={this.props.projectInfo.name}
            style={{ color: `${this.props.projectInfo.color}` }}
            onClick={() => this.props.toggleClickState("Dropdown")}
            readOnly
          />
        </div>
      );
    }
    
    if (this.props.isDropdownClicked) {
      return (
        <div className="dropdown">
          <input
            type="text"
            className="dropdown__input"
            value={this.props.projectInfo.name}
            style={{ color: `${this.props.projectInfo.color}` }}
            onClick={() => this.props.toggleClickState("Dropdown")}
            readOnly
          />
          <ul className="dropdown__content">
            <li
              className="dropdown__item"
              data-color="#f3a683"
              data-name="Creamy Peach"
              style={{ color: "#f3a683" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Creamy Peach</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#f19066"
              data-name="Sawtooth Aak"
              style={{ color: "#f19066" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Sawtooth Aak</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#ea8685"
              data-name="Apple Valley"
              style={{ color: "#ea8685" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Apple Valley</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#e66767"
              data-name="Porcelain Rose"
              style={{ color: "#e66767" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Porcelain Rose</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#cf6a87"
              data-name="Old Geranium"
              style={{ color: "#cf6a87" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Old Geranium</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#c44569"
              data-name="Deep Rose"
              style={{ color: "#c44569" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Deep Rose</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#778beb"
              data-name="Soft Blue"
              style={{ color: "#778beb" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Soft Blue</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#546de5"
              data-name="Cornflower"
              style={{ color: "#546de5" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Cornflower</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#786fa6"
              data-name="Purple Mountain Majesty"
              style={{ color: "#786fa6" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Purple Mountain Majesty</span>
            </li>
            <li
              className="dropdown__item"
              data-color="#574b90"
              data-name="Purple Corallite"
              style={{ color: "#574b90" }}
              onClick={this.handleClick}
            >
              <i className="fa fa-circle"></i>
              <span>Purple Corallite</span>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Dropdown;
