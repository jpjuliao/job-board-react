import React, { useState, useEffect } from 'react';

/**
 * A higher-order component that wraps a given component with a React Profiler.
 * 
 * This wrapper component logs the time taken to render the wrapped component
 * to the console, providing performance insights during development.
 */

const ProfilerWrapper = (
  WrappedComponent: React.ComponentType<React.PropsWithChildren<unknown>>
) => {

  /**
   * Wraps a component in a Profiler that logs the time it takes to render.
   */
  const ProfilerComponent: React.FC<React.PropsWithChildren<unknown>> = ({ children, ...props }) => {
    const [renderTime, setRenderTime] = useState(0);

    useEffect(() => {
      const startTime = performance.now();
      return () => {
        const endTime = performance.now();
        setRenderTime(endTime - startTime);
      };
    }, [children]);

    useEffect(() => {
      if (renderTime > 0) {
        console.log(`Render time: ${WrappedComponent.name} ${renderTime}ms`);
      }
    }, [renderTime]);

    return (
      <WrappedComponent {...props}>;
        {children}
      </WrappedComponent>
    );
  };

  return ProfilerComponent;
};

export default ProfilerWrapper;