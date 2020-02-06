import React from "react";
import firebase from "firebase";
import { firebaseApp } from "../base";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends React.Component {
  emailRef = React.createRef();
  passRef = React.createRef();
  regEmailRef = React.createRef();
  regPassRef = React.createRef();

  state = {
    isRegisterClicked: false
  };

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = authData => {
    //Add user id to the local state
    localStorage.setItem("uid", JSON.stringify(authData.user.uid));

    this.props.history.push("project3h304m5e");
  };

  handelErr = err => {
    const errMessage = err.code
      .replace("auth/", "")
      .replace(/-/g, " ")
      .toUpperCase();

    toast(`${errMessage}`, {
      autoClose: 4000,
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      className: "background__color",
      bodyClassName: "grow_font__size"
    });
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
      .then(this.authHandler)
      .catch(this.handelErr);
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
      .then(this.authHandler)
      .catch(this.handelErr);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
      .catch(this.handelErr);
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
              <button
                className="google"
                onClick={() => this.authenticate("Google")}
              >
                GOOGLE
              </button>
              <button
                className="facebook"
                onClick={() => this.authenticate("Facebook")}
              >
                FACEBOOK
              </button>
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
            <button type="submit" className="login__Button">
              LOGIN
            </button>
            <button
              className="google"
              onClick={() => this.authenticate("Google")}
            >
              GOOGLE
            </button>
            <button
              className="facebook"
              onClick={() => this.authenticate("Facebook")}
            >
              FACEBOOK
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Login;
