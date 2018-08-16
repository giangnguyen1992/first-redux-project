import React from 'react';

export const ChatWindow = ({ activeUserId }) => {
    return (
        <div className='ChatWindow'>
            Conversation for user id: {activeUserId}
        </div>
    );
};