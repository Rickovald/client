import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Main from './Main/Main'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import Error404 from './Error404/Error404'
import About from './About/About'
import Contacts from './Contacts/Contacts'

const App = () => {
  return (
    <div className='App'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Router>
        <Navigation />
        <Routes>
          <Route
            path='/'
            // caseSensitive={false}
            element={<Main />}
          />
          <Route
            path='/about'
            // caseSensitive={false}
            element={<About />}
          />
          <Route
            path='/contacts'
            // caseSensitive={false}
            element={<Contacts />}
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