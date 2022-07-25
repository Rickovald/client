import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import Error404 from './Error404/Error404'

const App = () => {
  return (
    <div className='App'>
     <Router>
      <Navigation />
      <Routes>
        <Route
          path='/'
          // caseSensitive={false}
          element={<Main />}
        />
        {
        /* <Route
          path='/concerts'
          // caseSensitive={false}
          element={<Concerts />}
        />
        <Route
          path='/albums'
          // caseSensitive={false}
          element={<Albums />}
        />
        <Route
          path='/album/:id'
          // caseSensitive={false}
          element={<Album />}
        />
        <Route
          path='/admin'
          // caseSensitive={false}
          element={<Admin />}
        />
        */}
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App