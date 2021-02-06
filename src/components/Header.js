import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 2em;
  & > div {
    display: flex;
    align-items: center;
  }
`;

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
