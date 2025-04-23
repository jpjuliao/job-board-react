import './App.css'
import JobBoard from './components/JobBoard'
import { JobsProvider } from './context/JobsContext'
import withProfiler from './components/withProfiler'

function App() {

  const ProfilerJobBoard = withProfiler(JobBoard);

  return (
    <JobsProvider>
      <header className="App-header">
        <h1>Job Board</h1>
      </header>
      <main>
        <ProfilerJobBoard />
      </main>
      <footer>
        <p className='pt-5'>© 2025 Job Board. All rights reserved. Created by <a href="https://github.com/jpjuliao">jpjuliao</a>.</p>
      </footer>
    </JobsProvider>
  )
}

export default App