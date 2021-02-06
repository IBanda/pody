import { observer } from 'mobx-react-lite';
import React from 'react';
import { usePlayer } from '../Context';
import Player from './Player';
import Playlist from './Playlist';

export default observer(function BottomSection() {
  const { currentPlaying, currentPlaylist, updatePlaylist } = usePlayer();
  return (
    <div>
      <div className="row">
        <div className="col-lg-6  order-1 order-lg-0 mb-3 mb-lg-0">
          <Playlist onSetPlaylist={updatePlaylist} playlist={currentPlaylist} />
        </div>
        <div className="col-lg-6 order-0 order-lg-1">
          <Player playlist={currentPlaylist} currentPlaying={currentPlaying} />
        </div>
      </div>
    </div>
  );
});
