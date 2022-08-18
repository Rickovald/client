import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// COMPONENT IMPORTS
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
            element={<Main />}
          />
          {/* COMPONENT ROUTES */}
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/contacts'
            element={<Contacts />}
          />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App