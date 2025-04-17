import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError: (error: Error) => void;
}

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