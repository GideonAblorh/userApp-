import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({name, email, gen, id, removeUser}) => {
    const handleClick = () => {
        removeUser(id)
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Gen: {gen}</p>
            <button onClick={handleClick}>Remove user</button>
            <Link to={`/edit/${id}`}>Edit User</Link>
            <hr />
        </div>
    );
}

export default UserInfo;
