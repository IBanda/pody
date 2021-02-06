import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useFetch from '../utils/useFetch';
import ResultsList from './ResultsList';
import ThemeToggle from './ThemeToggle';
import Toggle from './Toggle';

const StyledForm = styled.form`
  max-width: 400px;
  position: relative;
  margin-left: auto;
  .input-wrapper {
    display: flex;
    border-radius: 999px;
    overflow: hidden;
    border: 2px solid #bfc0c5;

    &.remove-bt-border {
      border-radius: 20px 20px 0 0;
      border-bottom: none;
    }
    input,
    button {
      border: none;
      outline: none;
    }
    input {
      width: 100%;
      padding: 0.75em 3em 0.75em 1em;
    }
    button {
      position: absolute;
      right: 0;
      height: 100%;
      background: transparent;
      padding-right: 1em;
      cursor: pointer;
      img {
        max-width: 20px;
        width: 100%auto;
      }
    }
  }
`;
const StyledToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin: 0 10px;
    font-size: 12px;
  }
`;

export default function SearchInput({ handleModal }) {
  const [value, setValue] = useState('');
  const [searchType, setSearchType] = useState('episode');
  const [{ status, data }, setPayload, handleLazyFetch] = useFetch(null, {
    lazy: true,
    key: 'results',
  });

  const valRef = useRef();

  useEffect(() => {
    if (!value && status !== 'idle') {
      setPayload((prev) => ({
        ...prev,
        status: 'idle',
      }));
    }
  }, [setPayload, status, value]);

  const onChange = (event) => {
    const val = event.target.value;

    setValue(val);
  };

  const isEp = searchType === 'episode';

  const onSearch = (event) => {
    event.preventDefault();
    if (
      valRef.current?.value === value &&
      valRef.current?.searchType === searchType
    ) {
      return setPayload((prev) => ({ ...prev, status: 'resolved' }));
    }
    // setPayload({ status: 'idle', data: [] });
    handleLazyFetch(
      `search?q=${encodeURIComponent(
        value
      )}&sort_by_date=0&type=${searchType}&offset=0&len_min=10&len_max=30${
        isEp ? '&episode_count_max=10' : ''
      }&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`
    );
    valRef.current = { value, searchType };
  };

  const onBlur = (e) => {
    if (!e.relatedTarget?.id?.includes('search')) {
      setPayload((prev) => ({
        ...prev,
        status: 'idle',
      }));
    }
  };

  const onSearchTypeChange = () => {
    if (searchType === 'episode') {
      setSearchType('podcast');
    } else {
      setSearchType('episode');
    }
  };

  return (
    <>
      <StyledToggleWrapper>
        <span>{searchType}</span>{' '}
        <Toggle
          data-testid="search-toggle"
          onToggle={onSearchTypeChange}
          className="mr-2"
        />
        | <ThemeToggle />
      </StyledToggleWrapper>
      <StyledForm onSubmit={onSearch} onBlur={onBlur} autoComplete="off">
        <div
          className={`input-wrapper ${
            status === 'idle' ? '' : 'remove-bt-border'
          }`}
        >
          <input
            aria-label="search"
            placeholder={`Search for ${searchType}s`}
            id="search-input"
            value={value}
            onChange={onChange}
          />
          {!!value && (
            <button data-testid="search-btn" id="search-btn" type="submit">
              <img src="/search.png" alt="search" />
            </button>
          )}
        </div>
        <ResultsList
          searchType={searchType}
          results={data}
          handleModal={handleModal}
          searchStatus={status}
        />
      </StyledForm>
    </>
  );
}
