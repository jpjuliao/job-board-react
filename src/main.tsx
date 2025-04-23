import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import ProfilerWrapper from './components/ProfilerWrapper.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const ProfilerApp = ProfilerWrapper(App);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Job Board Application</title>
          <meta name="description" content="Job Board" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        </Helmet>
        <ProfilerApp />
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
)