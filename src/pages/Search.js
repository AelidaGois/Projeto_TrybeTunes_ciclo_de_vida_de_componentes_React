import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  state = {
    desabilitado: true,
  }

isValidedButton = (event) => {
  const { target: { value } } = event;
  console.log(value.length);
  this.setState({
    desabilitado: value.length < 2,
  });
}

render() {
  const { desabilitado } = this.state;
  return (
    <>
      <div data-testid="page-search" />
      <Header />
      <form>
        <label htmlFor="search-artist-input">
          <input
            data-testid="search-artist-input"
            type="text"
            onChange={ this.isValidedButton }
          />
        </label>
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ desabilitado }
        >
          Pesquisar
        </button>

      </form>
    </>
  );
}
}

export default Search;
