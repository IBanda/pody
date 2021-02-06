import styled from 'styled-components';
import useFetch from '../utils/useFetch';
import PlaylistItem from './PlaylistItem';

const StyledPodcast = styled.div`
  .pd-left {
    text-align: center;
    img {
      width: 100%;
      object-fit: fill;
    }
    h3.title {
      font-weight: 600;
      font-size: 1em;
    }
    p.publisher {
      font-weight: 600;
      font-size: 14px;
    }
  }
`;

const defaultVal = {};

export default function Podcast({ id }) {
  const [
    { data },
  ] = useFetch(
    `podcasts/${id}?next_episode_pub_date=1479154463000&sort=recent_first`,
    { defaultVal }
  );

  const fetchedEpisodes = data?.episodes || Array(10).fill(null);
  return (
    <StyledPodcast>
      <div className="row">
        <div className="col-lg-6 pd-left">
          <img src={data.image} alt="podcast" />
          <h3 className="title">{data.title}</h3>
          <p className="publisher">{data.publisher}</p>
        </div>
        <div className="col-lg-6">
          <ul>
            {fetchedEpisodes.map((episode, index) => (
              <li key={episode?.id || index}>
                <PlaylistItem episode={episode} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledPodcast>
  );
}
