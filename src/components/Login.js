import React from "react";
import { connect } from "react-redux";
import { loginWithEmail, loginWithGoogle } from "../store/authActions";

function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.loginWithEmail(email, password);
  };
  return (
    <div className="login-all">
      <h1 className="login">Login Now</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="textbox2">
          <input name="email" type="email" placeholder="email" />
        </div>

        <div className="textbox2">
          <input name="password" type="password" placeholder="password" />
        </div>

        
        <button className="btn2" type="submit">Login</button>
        

        <button onClick={props.loginWithGoogle}>
          <img
            src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            height="25"
            width="80"
            alt="google"
          />
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = () => {};

const mapDispatchToProps = {
  loginWithEmail,
  loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
