import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  state = {
    desabilitado: true,
    album: [],
    valueInput: '',
    artista: '',
  }

isValidedButton = () => {
  const { valueInput } = this.state;
  this.setState({
    desabilitado: valueInput.length < 2,
  });
};

handleInput = ({ target }) => {
  this.setState({
    valueInput: target.value,
  }, this.isValidedButton);
}

getAlbum = async () => {
  const { valueInput } = this.state;
  this.setState({
    artista: valueInput,
  });
  const data = await searchAlbumAPI(valueInput);
  this.setState({
    album: data,
    valueInput: '',
  });
}

render() {
  const { desabilitado, valueInput, album, artista } = this.state;
  return (
    <>
      <div data-testid="page-search" />
      <Header />
      <form>
        <label htmlFor="search-artist-input">
          <input
            data-testid="search-artist-input"
            type="text"
            value={ valueInput }
            onChange={ this.handleInput }
            name="input"
          />
        </label>
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ desabilitado }
          onClick={ this.getAlbum }
          name="search"
        >
          Pesquisar
        </button>
      </form>
      {album.length > 1
        && <p>{`Resultado de álbuns de: ${artista}`}</p>}
      {album.map((cadaAlbum) => (
        <div key={ cadaAlbum.collectionId }>
          <img src={ cadaAlbum.artworkUrl100 } alt="Capa do Album" />
          <p>{cadaAlbum.collectionName}</p>
          <p>{cadaAlbum.artistName}</p>
          <Link
            data-testid={ `link-to-album-${cadaAlbum.collectionId}` }
            to={ `/album/${cadaAlbum.collectionId}` }
          >
            Album
          </Link>
        </div>
      ))}
      {album.length === 0 ? <p>Nenhum álbum foi encontrado</p> : ''}
    </>
  );
}
}

export default Search;
