import React, { useState, useEffect } from 'react';

const withProfiler = (WrappedComponent: React.ComponentType<React.PropsWithChildren<unknown>>) => {

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

export default withProfiler;