import {Routes, Route} from 'react-router'

import NavBar from './components/NavBar'
import PatternGenerator from './pages/PatternGenerator'
import PatternDetailsPage from './pages/PatternDetailsPage'
import NewProjectPage from './pages/NewProjectPage'

function App() {
  

  return (
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/newpattern' element={<PatternGenerator/>} />
          <Route path='/patterns'>
            {/* <Route index element={}/> */}
            <Route path=':patternId' element={<PatternDetailsPage />} />
          </Route>
          <Route path='newproject' element={<NewProjectPage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
