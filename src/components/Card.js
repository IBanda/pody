import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

const StyledCard = styled.div`
  width: 255px;
  height: 355px;
  @media (max-width: 1439.98px) {
    width: 220px;
    height: 300px;
  }
  @media (max-width: 576px) {
    & {
      width: 170px;
      height: 270px;
    }
  }
  @media (max-width: 375px) {
    width: 150px;
    height: 250px;
  }
  @media (max-width: 320px) {
    width: 260px;
    height: 347px;
  }
  img {
    object-fit: fill;
    width: 100%;
    border-radius: 1em;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  }
  h4,
  h5 {
    margin: 0;
  }
  h4 {
    font-size: 14px;
    margin: 1em 0 10px 0;
    font-weight: 600;
  }
  h5 {
    color: #74767b;
    font-size: 13px;
  }
`;
export default function Card({ src, author, title }) {
  return (
    <StyledCard data-testid="pd-card">
      {src ? (
        <img src={src} alt="podcast" />
      ) : (
        <ContentLoader
          speed={2}
          width="100%"
          height="75%"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="17" ry="17" width="100%" height="100%" />
        </ContentLoader>
      )}
      <h4>{title}</h4>
      <h5>{author}</h5>
    </StyledCard>
  );
}
