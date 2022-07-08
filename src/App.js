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
  state = {
    disable: true,
    name: '',
  };

  isValidedButton = () => {
    const { name } = this.state;
    const NUMBER = 2;
    if (name.length >= NUMBER) {
      console.log('Maior que 2');
      this.setState({
        disable: false,
      });
    } else {
      console.log('sou true');
      this.setState({
        disable: true,
      });
    }
  };

  handleOnChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    this.isValidedButton();
  };

  render() {
    const { disable, name } = this.state;
    return (
      <>
        <h1>TrybeTunes</h1>
        <Switch>
          <Route
            path="/"
            exact
            render={ (props) => (<Login
              { ...props }
              disable={ disable }
              handleOnChange={ this.handleOnChange }
              nameInput={ name }
            />) }
          />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile" exact component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </>

    );
  }
}

export default App;
