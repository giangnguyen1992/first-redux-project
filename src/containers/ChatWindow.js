import React from 'react';
import _ from 'lodash';

import store from '../store';
import Header  from '../components/Header';
import Chats from './Chats';
import MessageInput from './MessageInput';

import '../styles/ChatWindow.css';

export const ChatWindow = (props) => {
    const state = store.getState();
    const activeUser = state.contacts[props.activeUserId];
    const activeMsgs = state.messages[props.activeUserId];
    const { typing } = state; 

    return (
        <div className='ChatWindow'>
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)} />
            <MessageInput value ={typing} />
        </div>
    );
};