import React from 'react';
import _ from 'lodash';

import store from '../store';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

import '../styles/App.css';

const App = () => {
    const state = store.getState();

    return (
      <div className='App'>
        <Sidebar contacts={_.values(state.contacts)} />
        <Main user={state.user} activeUserId={state.activeUserId} />
      </div>
    );
}

export default App;
