import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Dishes from '../pages/Dishes';
import Booking from '../pages/Booking';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

function LayoutRoutes() {
  return (
  <Router>
   <Header/>    
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/dishes' element={<Dishes/>}/>
   <Route path='/services' element={<Booking/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </Router>
  );
};

export default LayoutRoutes;
