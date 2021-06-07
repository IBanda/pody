import styled from 'styled-components';
import useFetch from '../utils/useFetch';
import PlaylistItem from './PlaylistItem';
import SimpleBar from 'simplebar-react';

const StyledDiv = styled.div`
  position: sticky;
  top: 2px;
  background-color: #fff;
  height: 100%;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1em;
  overflow: hidden;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    overflow: auto;
    /* padding: 10px 10px 10px 3px; */
  }

  h3 {
    font-weight: 700;
    font-size: 1.05em;
    margin-bottom: 0.5em;
  }
`;
const defaultVal = {};
export default function Playlist({
  onSetPlaylist,
  playlist: { id, episodes } = {},
}) {
  const [
    { data },
  ] = useFetch(
    'playlists/kr3-ta28cJu?type=episode_list&last_timestamp_ms=0&sort=oldest_added_first',
    { defaultVal }
  );

  let dataArray = data.items ? data.items : Array(15).fill(null);
  if (episodes?.length) {
    dataArray = episodes;
  }

  const handlePlaylist = () => {
    if (episodes?.length) {
      onSetPlaylist({ id, episodes });
    } else {
      onSetPlaylist({ id: data?.id, episodes: data.items.map((d) => d.data) });
    }
  };

  return (
    <StyledDiv>
      <h3>Playlist</h3>
      <SimpleBar style={{ height: '93%' }}>
        <ul>
          {dataArray.map((playlistItem, index) => (
            <li key={playlistItem?.id || index}>
              <PlaylistItem
                playlistItem={playlistItem?.data || playlistItem}
                onSetPlaylist={handlePlaylist}
              />
            </li>
          ))}
        </ul>
      </SimpleBar>
    </StyledDiv>
  );
}
