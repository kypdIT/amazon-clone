import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>email</h5>
          <input type="text" />
          <h5>password</h5>
          <input type="text" />
          <button>Sign In</button>
        </form>

        <p></p>

        <button>Create your Account!</button>
      </div>
    </div>
  );
}

export default Login;
