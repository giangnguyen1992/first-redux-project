import React, { Component } from 'react';

import '../styles/Chats.css';

const Chat = (props) => {
    return (
        <span className={`Chat ${props.message.is_user_msg ? 'is-user-msg' : ''}`}>{props.message.text}</span>
    );
};

class Chats extends Component {
    constructor(props) {
        super(props);

        this.chatsRef = React.createRef();
    };

    componentDidMount() {
        this.scrollToBottom();
    };

    componentDidUpdate() {
        this.scrollToBottom();
    };

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };

    render() {
        return (
            <div className='Chats' ref={this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} />
                ))}
            </div>
        );
    };
};

export default Chats;