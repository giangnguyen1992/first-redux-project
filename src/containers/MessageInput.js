import React from 'react';

import store from '../store';
import { setTypingValue, sendMessage } from '../action';

import '../styles/MessageInput.css';

const messageInput = (props) => {
    const state = store.getState();

    const handleSubmit = e => {
        e.preventDefault();
        store.dispatch(sendMessage(state.typing, state.activeUserId));
    };

    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    return (
        <form className='Message' onSubmit={handleSubmit}>
            <input 
                className='Message__input'
                onChange={handleChange}
                value={props.value}
                placeholder='write a message'
            />    
        </form>
    );
};

export default messageInput;