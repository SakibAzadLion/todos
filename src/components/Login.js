import React from "react";
import { firebaseApp } from "../base";

class Login extends React.Component {
  emailRef = React.createRef();
  passRef = React.createRef();
  regEmailRef = React.createRef();
  regPassRef = React.createRef();

  state = {
    isRegisterClicked: false
  };

  loginWithPass = e => {
    //1) Prevent from submiting
    e.preventDefault();
    console.log(this.emailRef.current.value, this.passRef.current.value);
    //2) Login with email and pass
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(
        this.emailRef.current.value,
        this.passRef.current.value
      )
      .then(u => console.log(u))
      .catch(err => console.log(err));
  };

  registerWithPass = e => {
    //1) Prevent from submiting
    e.preventDefault();

    //2) Register new user
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(
        this.regEmailRef.current.value,
        this.regPassRef.current.value
      )
      .then(u => console.log(u))
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.isRegisterClicked) {
      return (
        <div className="login__page">
          <div className="login__form">
            <h1>TODOS</h1>
            <form className="form" onSubmit={this.registerWithPass}>
              <input
                type="email"
                ref={this.regEmailRef}
                className="user__name"
                placeholder="Email"
              />
              <input
                type="password"
                ref={this.regPassRef}
                className="user__password"
                placeholder="Password"
              />
              <span
                className="register__btn"
                onClick={() => this.setState({ isRegisterClicked: false })}
              >
                Login
              </span>
              <button type="submit" className="login__Button">
                REGISTER
              </button>
              <button className="google">GOOGLE</button>
              <button className="facebook">FACEBOOK</button>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div className="login__page">
        <div className="login__form">
          <h1>TODOS</h1>
          <form className="form" onSubmit={this.loginWithPass}>
            <input
              type="email"
              ref={this.emailRef}
              className="user__name"
              placeholder="Email"
            />
            <input
              type="password"
              ref={this.passRef}
              className="user__password"
              placeholder="Password"
            />
            <span
              className="register__btn"
              onClick={() => this.setState({ isRegisterClicked: true })}
            >
              Register
            </span>
            <button className="login__Button">LOGIN</button>
            <button className="google">GOOGLE</button>
            <button className="facebook">FACEBOOK</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
