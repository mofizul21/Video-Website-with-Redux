import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App()
{
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/videos/:videoId' element={ <Video /> }></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
