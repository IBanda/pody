import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import LazyImage from './LazyImage';

const StyledCard = styled.div`
  .card-img {
    /* width: 150px;
    height: 150px; */
    /* 
    position: relative;
    @media (max-width: 1500px) {
      width: 165px;
      height: 165px;
    }
    @media (max-width: 1023.98px) {
      width: 140px;
      height: 140px;
    }
    @media (max-width: 576px) {
      & {
        width: 150px;
        height: 150px;
      }
    }

    @media (max-width: 375px) {
      width: 90px;
      height: 90px;
    }
    @media (max-width: 320px) {
      width: 75px;
      height: 75px;
    }*/
    img {
      object-fit: fill;
      width: 100%;
      border-radius: 1em;
    }
  }
  h4,
  h5 {
    margin: 0;
  }
  h4 {
    font-size: 13px;
    margin: 0.5em 0;
    font-weight: 600;
  }
  h5 {
    color: #74767b;
    font-size: 12px;
  }
`;
export default function Card({ src, author, title }) {
  return (
    <StyledCard data-testid="pd-card">
      <div className="position-relative card-img">
        {src ? (
          <LazyImage src={src} alt="podcast" />
        ) : (
          <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="17" ry="17" width="100%" height="100%" />
          </ContentLoader>
        )}
      </div>
      {title || author ? (
        <>
          <h4 className="d-block text-truncate">{title}</h4>
          <h5 className="d-block text-truncate">{author}</h5>
        </>
      ) : (
        <ContentLoader
          speed={2}
          width="100%"
          height={50}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="10" rx="0" ry="0" width="100%" height="15" />
          <rect x="0" y="30" rx="0" ry="0" width="100%" height="15" />
        </ContentLoader>
      )}
    </StyledCard>
  );
}
