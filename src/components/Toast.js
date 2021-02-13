import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import styled from 'styled-components';

const StyledToast = styled.div`
  position: fixed;
  right: 1em;
  bottom: 1em;
  color: #000;

  h6.playing {
    color: #000;
    margin: 0;
  }
  .pt-body {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      object-fit: fill;
      object-position: center;
    }
    .title {
      font-size: 12px;
      margin: 0;
    }
  }
`;
export default function PToast({ id, title, image }) {
  const [showToast, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, [id]);
  return (
    <StyledToast>
      <Toast
        onClose={() => setShow(false)}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <h6 className="playing">Now Playing</h6>
          <div className="pt-body">
            <div className="mr-2">
              <img src={image} alt="cover" />
            </div>
            <p className="title d-block text-truncate">{title}</p>
          </div>
        </Toast.Body>
      </Toast>
    </StyledToast>
  );
}
