import React from 'react';
import './MessageForm.css';

class MessageForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message : ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSend(this.state.message);
        this.setState({ message : '' });
    }

    handleChange(e){
         this.setState({ message : e.target.value});
    }

    render() {
        return (
            <div className="Form">
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <input type="text" id="msgout" placeholder="Message..." value={this.state.message} onChange={this.handleChange.bind(this)}/>
                    &nbsp;
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        );
    }
}

MessageForm.propTypes = {
    onSend: React.PropTypes.any.isRequired
};

export default MessageForm;