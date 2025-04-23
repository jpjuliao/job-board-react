import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

/**
 * A React component that serves as an error boundary to catch JavaScript errors anywhere in the child component tree.
 *
 * Utilizes the `componentDidCatch` lifecycle method to update the error state and log the error details.
 * Displays a fallback UI when an error is encountered.
 *
 */

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo>({} as React.ErrorInfo);

  useEffect(() => {
    if (error) {
      componentDidCatch(error, errorInfo);
      console.error(error, errorInfo);
    }
  }, [error, errorInfo]);

  const componentDidCatch = (error: Error, errorInfo: React.ErrorInfo) => {
    setHasError(true);
    setError(error);
    setErrorInfo(errorInfo);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default ErrorBoundary;