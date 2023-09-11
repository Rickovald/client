import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// COMPONENT IMPORTS
import Main from './Pages/Main/Main';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Error404 from './Pages/Error404/Error404';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';

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
    );
};

export default App;