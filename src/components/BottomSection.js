import { observer } from 'mobx-react-lite';
import React from 'react';
import { usePlayer } from '../Context';
import Player from './Player';
import Playlist from './Playlist';
import styled from 'styled-components';

const StyledRow = styled.div`
  position: absolute;
  top: 310px;
  bottom: 0;
  width: 100%;

  .player-section {
    @media (max-width: 1200px) {
      height: 155px !important;
      position: fixed;
      bottom: 0;
      padding: 0 !important;
      width: 100%;
      .player {
        border-radius: 0 !important;
      }
    }
    @media (max-width: 575px) {
      height: 100px !important;
      .player {
        padding-top: 0.115em;
        padding-bottom: 0.115em;
        .rhap_container {
          padding: 0;
        }
        h6 {
          margin-bottom: 0.5em;
        }
        .rhap_stacked .rhap_controls-section {
          margin-top: 0px;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    & {
      bottom: 160px;
    }
  }
  @media (max-width: 575px) {
    bottom: 100px;
    top: 300px;
  }
  @media (max-width: 320px) {
    top: 280px;
  }
`;

export default observer(function BottomSection() {
  const { currentPlaying, currentPlaylist, updatePlaylist } = usePlayer();
  return (
    <StyledRow className="row">
      <div className="col-xl-6 h-100  mb-3 mb-lg-0 pb-3">
        <Playlist onSetPlaylist={updatePlaylist} playlist={currentPlaylist} />
      </div>
      <div className="col-xl-6 h-100  pb-3 player-section">
        <Player playlist={currentPlaylist} currentPlaying={currentPlaying} />
      </div>
    </StyledRow>
  );
});
