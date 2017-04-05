import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageForm from './MessageForm';
import MessagesList from './MessagesList';
import UsersList from './UsersList';
import NickForm from './NickForm';
import socketio from 'socket.io-client';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            messages: [],
            users: [],
            connect : false
        }

        this.i = 0;
    }

    componentWillMount(){
        const socket = this.socket = socketio('http://localhost:3300');

        socket.on('connect', function(){});

        socket.on('users', (users) => {
            this.setState({ users : users });
        });

        socket.on('msg', function(msg){
            var messages = [...this.state.messages, { id : msg.id, text : msg.message, nickname : msg.nickname, date : msg.date }];
            this.setState({ messages : messages });
        }.bind(this));

        socket.on('disconnect', function(){});
    }

    componentWillUnmount(){
        //this.socket.close();
    }

    handleSend(msg){
        this.socket.emit('msg', msg);
    }

    handleNick(nickname){
        this.socket.emit('nick', nickname);
        this.setState({ connect : true });
    }

    render() {
        if (this.state.connect) {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2 style={{color: this.props.color}}>Welcome to my Chat</h2>
                    </div>
                    <br/>
                    <div className="container">
                        <div className="flex">
                            <MessagesList messagesList={this.state.messages}/>
                            <UsersList usersList={this.state.users}/>
                        </div>
                        <MessageForm onSend={this.handleSend.bind(this)}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2 style={{color: this.props.color}}>Welcome to my Chat</h2>
                    </div>
                    <br/>
                    <div className="container">
                        <NickForm onSend={this.handleNick.bind(this)}/>
                    </div>
                </div>
            );
        }
    }
}

export default App;
