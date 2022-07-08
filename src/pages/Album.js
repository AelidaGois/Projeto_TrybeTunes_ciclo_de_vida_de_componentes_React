import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
 state = {
   artist: '',
   collection: '',
   music: [],
 }

 componentDidMount() {
   this.findSongs();
 }

findSongs = async () => {
  const { match: { params: { id } } } = this.props;
  const songs = await getMusics(id);
  this.setState({
    artist: songs[0].artistName,
    collection: songs[0].collectionName,
    music: songs.filter((song) => song.kind === 'song'),
  });
}

render() {
  const { artist, collection, music } = this.state;

  return (
    <div data-testid="page-album">
      {music.map((musica) => <MusicCard key={ musica.trackId } music={ musica } />)}
      <div />
      <Header />
      <p data-testid="artist-name">{artist}</p>
      <p data-testid="album-name">{collection}</p>
    </div>
  );
}
}

Album.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Album;
