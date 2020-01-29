import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <img src="/images/logo.png" alt="logo" />
          <button className="logout__btn" onClick={this.props.logout}>Log Out</button>
        </div>
      </header>
    );
  }
}

export default Header;
