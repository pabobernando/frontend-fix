import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';

function PlayVideoGame() {
  const sources = {
    trailerGame: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  };
  return (
    <Player src={sources.trailerGame}>
      <BigPlayButton position="center" />
    </Player>
  );
}

export default PlayVideoGame;
