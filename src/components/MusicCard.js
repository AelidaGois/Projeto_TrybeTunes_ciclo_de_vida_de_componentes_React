import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  state = {
    carregando: false,
  }

  saveFavoritesMusics = async () => {
    const { music } = this.props;
    console.log(music);
    await addSong(music);
  }

  onClickCheckbox = async () => {
    this.setState({
      carregando: true,
    });
    await this.saveFavoritesMusics();
    this.setState({
      carregando: false,
    });
  }

  render() {
    const { music } = this.props;
    const { trackName, previewUrl, trackId } = music;
    const { carregando } = this.state;

    return (
      <div>
        {carregando && <Loading /> }
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>

        <label
          htmlFor={ trackId }
        >
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            className="favorite"
            onChange={ this.saveFavoritesMusics }
            onClick={ this.onClickCheckbox }
          />

        </label>

      </div>
    );
  }
}
MusicCard.propTypes = {
  music: PropTypes.objectOf(PropTypes.any),
  carregando: PropTypes.bool,
}.isRequired;

export default MusicCard;
