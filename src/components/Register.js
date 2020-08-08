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
    <div>
      <h1>Register Now</h1>

      <form onSubmit={handleSubmit}>
          <div>
              <label>Email</label>
              <input name="email" type="email" placeholder="email"/>
          </div>

          <div>
              <label>Password</label>
              <input name="password" type="password" placeholder="password"/>
          </div>

          <hr/>

          <button type="submit">Join</button>

          <he/>

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
