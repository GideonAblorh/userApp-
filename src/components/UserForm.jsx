import React, { Component } from 'react';

export class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.name);
    };

    handleSubmit = e => {
        e.preventDefault();
        const newUsers = {
            name: this.State.name,
            email: this.State.email,
            gen: this.State.gen
        };
        this.props.addUser(newUsers)
        this.setState({
            name: "",
            email: "",
            gen: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="App_user-form">
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-control">
                    <label>Gen</label>
                    <input type="number" name="gen" value={this.state.gen} onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit">Add New User</button>
                </div>
            </form>
        );
    }
}

export default UserForm;