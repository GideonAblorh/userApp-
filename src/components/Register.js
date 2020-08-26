import React from 'react';
import { connect } from 'react-redux';
import { registerWithEmail, loginWithGoogle } from '../store/authActions';

function Register(props) {

    const handleSubmit = (e)=>{
        e.preventDefault()
        let email = e.target.elements.email.value
        let password = e.target.elements.password.value
        props.registerWithEmail(email, password);
    }
  return (
    <div className="register-all">
      <h1 className="register">Register Now</h1>

      <form className="register-form" onSubmit={handleSubmit}>
          <div className="textbox">
              <input name="email" type="email" placeholder="email"/>
          </div>

          <div className="textbox">
              <input name="password" type="password" placeholder="password"/>
          </div>


          <button className="btn" type="submit">Join</button>

          <button onClick={props.loginWithGoogle}>
              <img src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
              height="25" width="80" alt="google"/>
          </button>
      </form>
    </div>
  );
}

const mapStateToProps = ()=>{};

const mapDispatchToProps = {
    registerWithEmail,
    loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps) (Register);
