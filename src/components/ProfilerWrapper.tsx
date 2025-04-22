import React, { useState, useEffect } from 'react';

interface ProfilerWrapperProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that logs the time it takes to render its children to the console.
 *
 * The component uses the `useEffect` hook to measure and log the render time of its children.
 * It wraps the children and ensures that each child is rendered properly.
 *
 * @param {ProfilerWrapperProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The children elements to be rendered and profiled.
 * @returns {React.ReactElement} The rendered children wrapped in a fragment.
 */
const ProfilerWrapper = ({ children }: ProfilerWrapperProps) => {
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
      console.log(`Render time: ${renderTime}ms`);
    }
  }, [renderTime]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const element = child as React.ReactElement<{ children: React.ReactNode }>;
          return React.cloneElement(element, {}, element.props.children);
        }
        return child;
      })}
    </>
  );
};

export default ProfilerWrapper;