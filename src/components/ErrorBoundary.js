import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

const StyledAlert = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    max-width: 8em;
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <StyledAlert role="alert">
      <h6>Something went wrong:</h6>
      <button onClick={resetErrorBoundary}>Try again</button>
    </StyledAlert>
  );
}

export default function EB({ children, onReset }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ErrorBoundary>
  );
}
