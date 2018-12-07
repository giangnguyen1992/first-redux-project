import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const render = () => {
    return ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render);
registerServiceWorker();

