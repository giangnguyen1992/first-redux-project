import React, { Component } from 'react';
import  { Sidebar }  from './components/Sidebar';
import  { Main }  from './components/Main';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
