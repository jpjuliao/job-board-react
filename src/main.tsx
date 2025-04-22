import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import withProfiler from './components/withProfiler';

const ProfilerApp = withProfiler(App);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ProfilerApp />
    </ErrorBoundary>
  </StrictMode>,
)