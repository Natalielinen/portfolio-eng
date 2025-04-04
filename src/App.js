import React from 'react';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import ReactGA from 'react-ga4';
import usePageTracking from './hooks/usePageTracking';

ReactGA.initialize("G-ED34CFZ9NH"); // твой ID
ReactGA.send("pageview");

const App = () => {

    usePageTracking()

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
