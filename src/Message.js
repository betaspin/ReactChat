import React from 'react';

class Message extends React.Component {

    render() {
        return <li><span>{this.props.item.date} / {this.props.item.nickname}:</span><br/>{this.props.item.text}</li>;
    }
}

export default Message;
