import './App.css'
import JobBoard from './components/JobBoard'
import { JobsProvider } from './components/JobsContext'

function App() {

  return (
    <JobsProvider>
      <JobBoard />
    </JobsProvider>
  )
}

export default App
