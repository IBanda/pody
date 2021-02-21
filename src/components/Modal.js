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

  .pod-data {
    img.cover {
      max-width: 300px;
      margin-bottom: 1em;
      width: 100%;
    }

    .pod-desc-simple-bar {
      max-height: 10em;
    }
    @media (max-width: 576px) {
      img.cover {
        max-width: 150px;
        margin: 0 auto 1em;
      }
      .pod-desc-simple-bar {
        max-height: 7em;
        margin-bottom: 16px;
      }
    }
  }
  .title {
    font-weight: 600;
  }
  .desc-container {
    font-size: 12px;
  }
  .episodes {
    &-simple-bar {
      max-height: 32em;
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
      @media (max-width: 576px) {
        & {
          max-height: 17em;
        }
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
      <Modal.Header className="px-3 py-1 border-0" closeButton />
      <StyledDiv className="modal-cstbody">
        {!(status === 'pending') ? (
          <div className="row">
            <div className="col-lg-5 pod-data">
              <img
                className="cover d-none d-md-block"
                src={data?.image}
                alt="cover"
              />
              <h6 className="title">{data.title}</h6>
              <SimpleBar className="pod-desc-simple-bar d-none d-md-block">
                <div className="desc-container">
                  {compiler(data?.description || '')}
                </div>
              </SimpleBar>
            </div>
            <div className="col-lg-7 episodes">
              <SimpleBar className="episodes-simple-bar">
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
