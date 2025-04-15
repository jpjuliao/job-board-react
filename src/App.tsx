import './App.css'
import JobBoard from './components/JobBoard'
import { JobsProvider } from './context/JobsContext'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <JobsProvider>
      <Helmet>
        <title>Job Board</title>
      </Helmet>
      <header className="App-header">
      </header>
      <main>
        <JobBoard />
      </main>
      <footer>
        <p>© 2025 Job Board. All rights reserved. Created by <a href="https://github.com/jpjuliao">jpjuliao</a>.</p>
      </footer>
    </JobsProvider>
  )
}

export default App