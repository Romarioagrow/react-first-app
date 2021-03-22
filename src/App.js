import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.js';
import Button from '@material-ui/core/Button';
import HooksTask from './components/HooksTask.js';
import Game from './components/Game';
import GameHooks from './components/GameHooks';

class App extends React.Component {

  handleButtonClick = () => {
    console.log('this is:', this);
  };

  handleButtonActionClick = (param) => {
    console.log('this is:', this);
    console.log('param:', param);
  };

  render() {

    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    function checkUser(user) {
      if (user) {
        return <h3>User Authenticated: {formatName(mainUser)}</h3>;
      }
      return <h3><i>Anonimus user</i></h3>
    }

    function getUsername(user) {
      return user.userName;
    }

    const mainUser = {
      userName: 'keksv1',
      firstName: 'Keks',
      lastName: 'Keksov'
    }

    const usernameElement = (
      <h1>Username: {mainUser.userName}</h1>
    )

    const userElement = (
      checkUser(mainUser)
    )

    const helloElement = (
      <div>
        <h1>Hello, <i>{getUsername(mainUser)}</i>!</h1>
        <h2>Good to see you here.</h2>
        {usernameElement}
      </div>
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Button variant="contained" color="primary" onClick={this.handleButtonClick}>Clock!</Button >
            <Button variant="contained" color="primary" onClick={() => this.handleButtonActionClick('keks')}>Action</Button >
          </div>
          <Clock />
          <div>
            {helloElement}
          </div>
          <div>
            {userElement}
          </div>


        </header>
        {/* <Game /> */}
        <GameHooks/>
        <HooksTask />
      </div>
    );
  }
}

export default App;
