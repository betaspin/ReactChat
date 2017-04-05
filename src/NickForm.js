import React from 'react';
import './NickForm.css';

class NickForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nickname : ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSend(this.state.nickname);
        this.setState({ nickname : '' });
    }

    handleChange(e){
         this.setState({ nickname : e.target.value});
    }

    render() {
        return (
            <div className="Form">
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <input type="text" id="nickname" placeholder="Pseudo..." value={this.state.nickname} onChange={this.handleChange.bind(this)}/>
                    &nbsp;
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        );
    }
}

NickForm.propTypes = {
    onSend: React.PropTypes.any.isRequired
};

export default NickForm;