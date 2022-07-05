import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <Switch>
          <Route path="/" exact><Login /></Route>
          <Route path="/search"><Search /></Route>
          <Route path="/album/:id"><Album /></Route>
          <Route path="/favorites"><Favorites /></Route>
          <Route path="/profile" exact><Profile /></Route>
          <Route path="/profile/edit"><ProfileEdit /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </>

    );
  }
}

export default App;
