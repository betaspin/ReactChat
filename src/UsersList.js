import React from 'react';
import './UsersList.css';

class UsersList extends React.Component {

    render() {
        return <div className="usersList">
            Users :<br/>
            <ul>
                { this.props.usersList.map((user) => (
                    <li key={user.id}>{user.nickname}</li>
                ))}
            </ul>
        </div>;
    }
}

export default UsersList;