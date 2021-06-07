import useFetch from '../utils/useFetch';
import styled from 'styled-components';
import { usePlayer } from '../Context';
import { observer } from 'mobx-react-lite';

const defaultVal = {};

const StyledBtn = styled.button`
  border: 2px solid #${(props) => props.borderColor};
  background-color: #fff;
  margin-right: 1em;
  margin-bottom: 1em;
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
  padding: 0.5em;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.12);
`;

const StyledUL = styled.ul`
  @media (max-width: 1200px) {
    scroll-snap-type: x mandatory;
    flex-wrap: nowrap !important;
    width: 100%;
    overflow: auto;
    li {
      scroll-snap-align: center;
      button {
        white-space: nowrap;
      }
    }
  }
`;

export default observer(function Genres() {
  const [{ data }] = useFetch('genres?top_level_only=1', {
    defaultVal,
  });
  const { updateGenre } = usePlayer();
  return (
    <StyledUL className="list-unstyled mb-0 mt-2 d-flex flex-wrap">
      {data?.genres?.map((genre) => (
        <li key={genre.id}>
          <StyledBtn
            onClick={() => updateGenre(genre.id)}
            borderColor={getColor}
          >
            {genre.name}
          </StyledBtn>
        </li>
      ))}
    </StyledUL>
  );
});

function getColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
