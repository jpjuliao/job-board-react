import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError: (error: Error) => void;
}

/**
 * ErrorBoundary component that catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 *
 * @param {ErrorBoundaryProps} props The component props.
 * @param {React.ReactNode} props.children The children components that this error boundary wraps.
 * @param {(error: Error) => void} props.onError The callback function to handle the error.
 * @returns {React.ReactElement} The rendered component with error handling.
 */

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setError] = useState(false);
  const [error, setErrorObject] = useState<Error | null>(null);

  useEffect(() => {
    if (error) {
      console.error('Error caught by error boundary:', error);
    }
  }, [error]);

  const errorHandler = (error: Error) => {
    setError(true);
    setErrorObject(error);
  };

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{error?.message}</p>
      </div>
    );
  }

  return (
    <ErrorBoundary onError={errorHandler}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundary;