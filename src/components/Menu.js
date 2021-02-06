import styled from 'styled-components';

const StyledMenu = styled.nav`
  height: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-weight: 600;
    color: #bfc0c5;
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    li {
      display: flex;
      align-items: center;
      margin-right: 20px;
      img {
        max-width: 20px;
        width: 100%;
        margin-right: 10px;
      }
      &:last-child {
        margin-right: 0 !important;
      }
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <ul>
        <li>
          <img src="/home.png" alt="home" />
          Home
        </li>
        <li>
          <img src="/playlist.png" alt="home" />
          Playlists
        </li>
        <li>
          <img src="/recommended.png" alt="home" />
          Recommended
        </li>
      </ul>
    </StyledMenu>
  );
}
