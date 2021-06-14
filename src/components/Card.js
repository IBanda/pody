import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import LazyImage from './LazyImage';

const StyledCard = styled.div`
  .card-img {
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
      <div
        className="position-relative card-img"
        style={{ padding: src ? '50%' : '' }}
      >
        {src ? (
          <LazyImage src={src} alt="podcast" />
        ) : (
          <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            viewBox="0 0 150 150"
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
