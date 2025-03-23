import {Routes, Route} from 'react-router'

import NavBar from './components/NavBar'
import PatternGenerator from './pages/PatternGenerator'
import PatternDetailsPage from './pages/PatternDetailsPage'

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
        </Routes>
      </div>
    </>
  )
}

export default App
