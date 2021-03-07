/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import ContentLoader from 'react-content-loader';

export default function LazyImage(props) {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <ContentLoader
          speed={2}
          width="100%"
          height="75%"
          backgroundColor="#f2f2f2"
          foregroundColor="#f2f2f2"
          style={{ position: 'absolute', top: 0 }}
        >
          <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
        </ContentLoader>
      ) : null}
      <img {...props} onLoad={onLoad} />
    </>
  );
}
