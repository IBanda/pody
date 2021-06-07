import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import { usePlayer } from '../Context';
import { observer } from 'mobx-react-lite';

const StyledResultList = styled.div`
  position: absolute;
  width: 100%;
  box-shadow: 0 4px 6px rgba(32, 33, 36, 0.18);
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  border-top: 1px solid lightcoral;
  z-index: 2;
  color: #000;
  padding: 10px 0;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    /* max-height: 400px;
    overflow-y: auto; */
  }
  li {
    margin-bottom: 10px;
    font-size: 13px;
    &.result-item {
      height: 50px;
    }
  }
`;

const StyledListItem = styled.li`
  .result {
    display: flex;
    padding-left: 1em;
    align-items: center;
    width: 100%;
    background-color: transparent;
    color: #000;
    border: none;
    outline: none;
    text-align: left;
    img {
      max-width: 50px;
      width: 100%;
      border-radius: 10px;
      margin-right: 1em;
    }
    p {
      margin: 0;
    }
  }
`;

export default observer(function ResultsList({
  searchType,
  results,
  searchStatus,
  handleModal,
}) {
  const { updatePlaying } = usePlayer();

  function handleClick(data) {
    if (searchType === 'episode') {
      updatePlaying({
        id: data?.id,
        src: data?.audio,
        image: data?.image,
        title: data?.title_original,
      });
    } else {
      handleModal(data?.id);
    }
  }

  if (searchStatus === 'idle') return null;

  const error =
    searchStatus === 'rejected' ? (
      <MsgListItem>Something went wrong</MsgListItem>
    ) : null;

  const loading =
    searchStatus === 'pending' ? <MsgListItem>Searching...</MsgListItem> : null;

  const noResults =
    searchStatus === 'resolved' && !results?.length ? (
      <MsgListItem>No results matched your search</MsgListItem>
    ) : null;

  return (
    <StyledResultList>
      <SimpleBar style={{ maxHeight: 300 }}>
        <ul role="listbox">
          {loading}
          {error}
          {noResults}
          {results &&
            results.map((data) => (
              <StyledListItem className="result-item" key={data.id}>
                <button
                  id="search-result"
                  onClick={() => handleClick(data)}
                  className="result"
                >
                  <img src={data.thumbnail} alt={data.title_original} />
                  <p className="d-block text-truncate">{data.title_original}</p>
                </button>
              </StyledListItem>
            ))}
        </ul>
      </SimpleBar>
    </StyledResultList>
  );
});

function MsgListItem({ children }) {
  return <li style={{ paddingLeft: '1em' }}>{children}</li>;
}
