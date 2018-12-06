import React from 'react';

import User from '../containers/User';

import '../styles/Sidebar.css';

const sidebar = (props) => {
    return (
        <aside className='Sidebar'>
           {props.contacts.map(contact => {
               return (
                    <User user={contact} key={contact.user_id}/>
               );
           })};
        </aside>
    );
};

export default sidebar;
