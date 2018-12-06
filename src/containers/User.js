import React from 'react';

import store from '../store/index';
import { setActiveUserId } from '../action/index';

import '../styles/User.css';

const handleUserClick = ({ user_id }) => {
    store.dispatch(setActiveUserId(user_id));
};

const user = (props) => {
    return (
        <div className='User' onClick={() => handleUserClick(props.user)}>
            <img src={props.user.profile_pic} alt ={props.user.name} className='User__pic' />
            <div className='User__details'>
                <p className='User__details-name'>{props.user.name}</p>
                <p className='User__details-status'>{props.user.status}</p>
            </div>
        </div>
    );
};

export default user;