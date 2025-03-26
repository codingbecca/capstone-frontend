import {Routes, Route} from 'react-router'

import NavBar from './components/NavBar'
import PatternGenerator from './pages/PatternGenerator'
import PatternDetailsPage from './pages/PatternDetailsPage'
import NewProjectPage from './pages/NewProjectPage'
import PatternsPage from './pages/PatternsPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  

  return (
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<PatternGenerator/>} />
          <Route path='/patterns'>
            <Route index element={<PatternsPage />}/>
            <Route path=':patternId' element={<PatternDetailsPage />} />
            <Route path=':patternId/edit' element={<PatternGenerator/>}/>
          </Route>
          <Route path='/projects'>
            <Route index element={<ProjectsPage/>} />
            <Route path='newproject' element={<NewProjectPage />}/>
          </Route>
          
        </Routes>
      </div>
    </>
  )
}

export default App
