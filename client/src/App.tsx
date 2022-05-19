import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import JoinRoomPage from './app/JoinRoomPage/JoinRoomPage';
import RoomPage from './app/RoomPage/RoomPage';
import IntroductionPage from './app/IntroductionPage/IntroductionPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join-room">
          <JoinRoomPage/>
        </Route>
        <Route path="/room">
          <RoomPage/>
        </Route>
        <Route path="/">
          <IntroductionPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
