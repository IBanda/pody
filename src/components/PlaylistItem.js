import styled from 'styled-components';
import getDuration from '../utils/getDuration';
import PlayIcon from './icons/Play';
import ContentLoader from 'react-content-loader';
import { usePlayer } from '../Context';
import { observer } from 'mobx-react-lite';
import PauseIcon from './icons/Pause';

const StyledPlaylistItem = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: #fff;
  position: relative;
  border: none;
  border-radius: 10px;
  outline: none;
  width: 100%;
  text-align: left;
  padding: 5px 0;

  .img-wrapper {
    img {
      width: 50px;
      height: 50px;
      object-position: center;
      object-fit: fill;
      border-radius: 10px;
      margin-right: 10px;
    }
  }
  p {
    font-size: 13px;
    font-weight: 600;
    margin: 0;
    color: #15224c;
    margin-left: 5px;
  }
  .duration {
    font-size: 12px;
    margin-left: auto;
    padding-left: 5px;
  }
`;

export default observer(function PlaylistItem({ playlistItem, onSetPlaylist }) {
  const {
    updatePlaying,
    currentPlaying: { id },
    playerStatus,
    setPlayerStatus,
  } = usePlayer();
  function handleClick(_episode) {
    updatePlaying({
      id: _episode?.id,
      src: _episode?.audio,
      image: _episode?.image,
      title: _episode?.title,
    });
    setPlayerStatus(
      id === _episode.id && playerStatus === 'playing' ? 'paused' : 'playing',
      'playlist'
    );
    if (typeof onSetPlaylist === 'function') {
      onSetPlaylist();
    }
  }

  const isPaused = playerStatus === 'playing';

  return (
    <StyledPlaylistItem
      data-testid="playlist-item"
      onClick={() => handleClick(playlistItem)}
    >
      {playlistItem ? (
        <>
          <div className="img-wrapper">
            <img
              src={playlistItem?.thumbnail ?? '/placeholder.svg'}
              alt="episode"
            />
          </div>

          <div>
            {id === playlistItem.id && isPaused ? <PauseIcon /> : <PlayIcon />}
          </div>

          <p className="d-block text-truncate">{playlistItem?.title}</p>
          <span className="duration">
            {getDuration(+playlistItem?.audio_length_sec)}
          </span>
        </>
      ) : (
        <ContentLoader
          speed={2}
          width="100%"
          height={52}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="50" height="50" />
          <rect x="75" y="20" rx="0" ry="0" width="80%" height="12" />
        </ContentLoader>
      )}
    </StyledPlaylistItem>
  );
});
