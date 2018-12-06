import React from 'react';

import Empty from './Empty'
import { ChatWindow } from '../containers/ChatWindow.js';

import '../styles/Main.css';

const main = (props) => {
    const renderMainContent = () => {
        if (!props.activeUserId) {
            return <Empty user={props.user} activeUserId={props.activeUserId} />
        } else {
            return <ChatWindow activeUserId={props.activeUserId} />
        }
    };

    return <main className='Main'>{renderMainContent()}</main>
};

export default main;

