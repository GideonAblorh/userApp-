import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addUser, deleteUser, getAllUsers } from './store/usersAction';
import {logoutUser} from './store/authActions';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';

export class App extends Component {

  addNewUser = (newUser) => {
    this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id)
};


componentDidMount(){
  this.props.getAllUsers();
        }  

  render() {
    return (
      <div className="App">
        <h1>MY FAMILY DATA</h1>
        <button onClick={this.props.logoutUser}>Logout</button>
        <UserForm addUser={this} />
        <div className="App_user-info">
          {this.props.users.map((item, index) => {
            return (
              <UserInfo
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              gen={item.gen}
              removeUser = {this.deleteUser}
              />
            );
          })}
        </div>
      </div> 
    ); 
  }
}

const mapStateToProps=(state)=>{
  console.log(state)
  return{
  users: state.usersState.users,
  };
};


  const mapDispatchToProps = {
    addUser,
    deleteUser,
    getAllUsers,
    logoutUser,
    }


export default connect(mapStateToProps,mapDispatchToProps)(App);