import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Favorites extends Component {
  state = {
    carregando: false,
    checkedMusic: false,
  }

componentDidMount = () => {
  this.getFavoriteSongs();
}

getFavoritesMusics = async () => {
  await getFavoriteSongs();
  this.setState({
    carregando: true,
    checkedMusic: true,
  });
}

  getCarregando = async () => {
    this.setState({
      carregando: true,
    });
    await this.getFavoriteSongs();
    this.setState({
      carregando: false,
      checkedMusic: true,
    });
  }

  render() {
    const { carregando, checkedMusic } = this.state;
    return (
      <>
        {carregando && <Loading /> }
        {/* {this.getCarregando} */}
        {checkedMusic === true ? checked : carregando }
        {/* {checkedMusic ? checked : null } */}
        <div data-testid="page-favorites" />
        <Header />
      </>
    );
  }
}

Favorites.propTypes = {
  music: PropTypes.objectOf(PropTypes.any),
  carregando: PropTypes.bool,
}.isRequired;

export default Favorites;
