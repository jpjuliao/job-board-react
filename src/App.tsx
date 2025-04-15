import './App.css'
import JobBoard from './components/JobBoard'
import { JobsProvider } from './context/JobsContext'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <JobsProvider>
      <Helmet>
        <title>Job Board Application</title>
        <meta name="description" content="Job Board" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>
      <header className="App-header">
      </header>
      <main>
        <JobBoard />
      </main>
      <footer>
        <p className='pt-5'>© 2025 Job Board. All rights reserved. Created by <a href="https://github.com/jpjuliao">jpjuliao</a>.</p>
      </footer>
    </JobsProvider>
  )
}

export default App