import React, { useState, useEffect } from 'react';

/**
 * A higher-order component that wraps a component and logs the time it takes to render to the console.
 *
 * The component uses the `useEffect` hook to measure the time it takes to render the wrapped component.
 * The render time is logged to the console as soon as the component is rendered.
 *
 * @param {React.ComponentType} WrappedComponent - The component to wrap.
 * @returns {React.FC<React.PropsWithChildren<unknown>>} - The wrapped component.
 */
const withProfiler = (WrappedComponent: React.ComponentType) => {

  /**
   * Component that wraps a component and logs the time it takes to render to the console.
   *
   * The component uses the `useEffect` hook to measure the time it takes to render the wrapped component.
   * The render time is logged to the console as soon as the component is rendered.
   *
   * @param {React.PropsWithChildren<unknown>} props - Props to pass to the wrapped component.
   * @returns {React.ReactElement} The wrapped component.
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

    return <WrappedComponent {...props} />;
  };

  return ProfilerComponent;
};

export default withProfiler;