import { useEffect } from 'react';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';
import useLocalstorage from '../utils/useLocalstorage';
import PToast from './Toast';

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  text-align: center;
  background-color: #1b262c;
  padding: 1em;
  border-radius: 10px;
  .image-wrapper {
    width: 85px;
    height: 85px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 1em;
    img {
      width: 100%;
      object-fit: fill;
    }
  }
  h6 {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 1.5em;
    color: #fff;
  }
`;

function getIndex(id, arr = []) {
  const i = arr.findIndex((e) => e.id === id);
  if (i >= 0) return i;
  return null;
}
export default function Player({
  currentPlaying,
  playlist: { episodes } = {},
}) {
  const { id, image, title, src } = currentPlaying || {};
  const [currentIndex, setIndex] = useState(() => getIndex(id, episodes));
  const [, updateInStorage] = useLocalstorage('currently:playing');
  const [isPlayed, setPlayed] = useState(false);

  useEffect(() => {
    const idx = getIndex(id, episodes);
    if (idx >= 0) {
      setIndex(idx);
    }
  }, [episodes, id]);

  useEffect(() => {
    if (currentIndex != null) {
      updateInStorage({
        id: episodes[currentIndex]?.id,
        image: episodes[currentIndex]?.image,
        title: episodes[currentIndex]?.title,
        src: episodes[currentIndex]?.audio,
      });
    }
  }, [currentIndex, episodes, updateInStorage]);

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

  return (
    <>
      <h3
        style={{
          fontSize: '1.5em',
          fontWeight: '600',
          marginBottom: '.5em',
        }}
      >
        Now playing
      </h3>
      <StyledPlayer className="player">
        <div className="image-wrapper">
          {!!image && <img src={_image} alt="playing" />}
        </div>
        <h6 data-testid="playing-title" className="w-100 text-truncate">
          {_title || 'Not playing'}
        </h6>
        <AudioPlayer
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          onEnded={onClickNext}
          src={_src}
          onPlay={() => setPlayed(true)}
          autoPlayAfterSrcChange
          showSkipControls
          showJumpControls={false}
        />
        {isPlayed && <PToast title={_title} image={_image} id={_id} />}
      </StyledPlayer>
    </>
  );
}
