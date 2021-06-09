import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';
import { LocalStorage, usePlayer } from '../Context';
import PToast from './Toast';

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  padding: 1em;
  border-radius: 10px;
  height: 100%;

  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.12);
  background: rgb(30, 60, 114);
  background: linear-gradient(
    90deg,
    rgba(30, 60, 114, 1) 0%,
    rgba(42, 82, 152, 1) 50%
  );
  .image-wrapper {
    width: 10em;
    height: 10em;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 1em;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: center;
    }
  }
  h6 {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 1.5em;
    color: #fff;
  }
  .rhap_container {
    background: transparent;
    border: none;
    box-shadow: none;
    outline: none;
    .rhap_main-controls-button {
      color: #eee;
      outline: none;
    }
    .rhap_progress-bar {
      outline: none;
    }
    .rhap_progress-indicator {
      background-color: #c70039;
    }
    .rhap_progress-filled {
      background-color: #0e49b5;
    }
    .rhap_time {
      color: #fff;
    }
  }
`;

function getIndex(id, arr = []) {
  const i = arr.findIndex((e) => e.id === id);
  if (i >= 0) return i;
  return null;
}
export default observer(function Player({
  currentPlaying,
  playlist: { episodes } = {},
}) {
  const { id, image, title, src } = currentPlaying || {};
  const [currentIndex, setIndex] = useState(() => getIndex(id, episodes));
  const [isPlayed, setPlayed] = useState(false);
  const {
    setPlayerStatus,
    playerStatus,
    playerStatusChangeSource,
    updatePlaying,
  } = usePlayer();

  const playBtnRef = useRef();
  useEffect(() => {
    playBtnRef.current = document.querySelector('.rhap_play-pause-button');
  }, []);

  useEffect(() => {
    if (playBtnRef.current && playerStatusChangeSource === 'playlist') {
      playBtnRef.current.click();
    }
  }, [playerStatus, playerStatusChangeSource]);

  useEffect(() => {
    const idx = getIndex(id, episodes);
    if (idx >= 0) {
      setIndex(idx);
    }
  }, [episodes, id]);

  useEffect(() => {
    if (currentIndex != null) {
      const item = {
        id: episodes[currentIndex]?.id,
        image: episodes[currentIndex]?.image,
        title: episodes[currentIndex]?.title,
        src: episodes[currentIndex]?.audio,
      };
      LocalStorage.setItem('current:playing', item);
      updatePlaying(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const onClickPrevious = () => {
    if (currentIndex > 0) {
      setIndex((prev) => prev - 1);
    }
  };
  const onClickNext = () => {
    if (currentIndex < episodes.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const onPlay = () => {
    setPlayed(true);
    setPlayerStatus('playing', 'player');
  };

  const onPlayError = (e) => {
    setPlayerStatus('stopped');
    if (e.message.includes('NotSupportedError')) {
      alert(e.message);
    }
  };

  let _id = id;
  let _image = image;
  let _title = title;
  let _src = src;
  if (currentIndex != null) {
    _id = episodes[currentIndex]?.id;
    _image = episodes[currentIndex]?.image;
    _title = episodes[currentIndex]?.title;
    _src = episodes[currentIndex]?.audio;
  }
  const hasImage = !!_image;
  return (
    <StyledPlayer className="player">
      <div
        className={`image-wrapper d-none d-xl-block ${
          hasImage ? '' : 'bg-white'
        }`}
      >
        <img src={hasImage ? _image : '/placeholder.svg'} alt="playing" />
      </div>
      <h6 data-testid="playing-title" className="w-100 text-truncate">
        {_title || 'Not playing'}
      </h6>
      <AudioPlayer
        onClickPrevious={onClickPrevious}
        onClickNext={onClickNext}
        onEnded={onClickNext}
        src={_src}
        onPlay={onPlay}
        onPause={() => setPlayerStatus('paused', 'player')}
        autoPlayAfterSrcChange
        showSkipControls
        showJumpControls={false}
        onPlayError={onPlayError}
      />
      {isPlayed && <PToast title={_title} image={_image} id={_id} />}
    </StyledPlayer>
  );
});
