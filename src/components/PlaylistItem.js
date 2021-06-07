import styled from 'styled-components';
import getDuration from '../utils/getDuration';
import PlayIcon from './icons/Play';
import ContentLoader from 'react-content-loader';
import { usePlayer } from '../Context';
import { observer } from 'mobx-react-lite';

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
  const { updatePlaying } = usePlayer();
  function handleClick(_episode) {
    updatePlaying({
      id: _episode?.id,
      src: _episode?.audio,
      image: _episode?.image,
      title: _episode?.title,
    });
    if (typeof onSetPlaylist === 'function') {
      onSetPlaylist();
    }
  }
  return (
    <StyledPlaylistItem
      data-testid="playlist-item"
      onClick={() => handleClick(playlistItem)}
    >
      {playlistItem ? (
        <>
          <div className="img-wrapper">
            <img src={playlistItem?.thumbnail} alt="episode" />
          </div>

          <div>
            <PlayIcon />
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
          backgroundColor="#b0b0b0"
          foregroundColor="#bababa"
        >
          <rect x="0" y="0" rx="10" ry="10" width="50" height="50" />
          <rect x="75" y="20" rx="0" ry="0" width="80%" height="12" />
        </ContentLoader>
      )}
    </StyledPlaylistItem>
  );
});
