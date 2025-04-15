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
      <JobBoard />
    </JobsProvider>
  )
}

export default App