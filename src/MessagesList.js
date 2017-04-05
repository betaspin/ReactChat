import React from 'react';
import Message from './Message';
import './MessagesList.css';

class MessagesList extends React.Component {

    render() {
        return <div className="messagesList">
            <ul>
                { this.props.messagesList.map((item) => (
                    <Message key={item.id} item={item} />
                ))}
            </ul>
        </div>;
    }
}

export default MessagesList;
