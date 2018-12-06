import React from 'react';

import '../styles/Header.css';

const header = (props) => {
    return (
        <header className='Header'>
            <h1 className='Header__name'>{props.user.name}</h1>
            <p className='Header__status'>{props.user.status}</p>
        </header>
    );
};

export default header;