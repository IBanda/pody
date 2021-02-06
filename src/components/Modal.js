import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import useFetch from '../utils/useFetch';
import { compiler } from 'markdown-to-jsx';
import PlaylistItem from './PlaylistItem';
import SimpleBar from 'simplebar-react';
import { usePlayer } from '../Context';
import { observer } from 'mobx-react-lite';

const StyledDiv = styled.div`
  padding: 1em;

  img.cover {
    max-width: 300px;
    margin-bottom: 1em;
    width: 100%;
  }
  .title {
    font-weight: 600;
  }
  .desc-container {
    font-size: 12px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      button {
        background-color: #fff;
      }
    }
  }
  .loading {
    text-align: center;
  }
`;
const defaultVal = {};

export default observer(function AppModal({ podcastId, show, onHide }) {
  const [{ status, data }] = useFetch(
    `podcasts/${podcastId}?sort=recent_first`,
    {
      defaultVal,
      defaultStatus: 'pending',
    }
  );
  const { updatePlaylist } = usePlayer();
  const handlePlaylist = () => {
    updatePlaylist({ id: data.id, episodes: data.episodes });
  };
  return (
    <Modal centered show={show} onHide={onHide} size="lg">
      <StyledDiv className="modal-cstbody">
        {!(status === 'pending') ? (
          <div className="row">
            <div className="col-lg-5">
              <img className="cover" src={data?.image} alt="cover" />
              <h6 className="title">{data.title}</h6>
              <SimpleBar style={{ maxHeight: '10em' }}>
                <div className="desc-container">
                  {compiler(data?.description || '')}
                </div>
              </SimpleBar>
            </div>
            <div className="col-lg-7">
              <SimpleBar style={{ maxHeight: '32em' }}>
                <ul>
                  {data?.episodes?.map((episode) => (
                    <li key={episode?.id}>
                      <PlaylistItem
                        playlistItem={episode}
                        onSetPlaylist={handlePlaylist}
                      />
                    </li>
                  ))}
                </ul>
              </SimpleBar>
            </div>
          </div>
        ) : (
          <h6 data-testid="modal-load-indicator" className="loading">
            Loading...
          </h6>
        )}
      </StyledDiv>
    </Modal>
  );
});
