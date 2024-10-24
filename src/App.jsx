import React from 'react';
import "./App.css";
import Navbar from './componenets/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import Footer from './componenets/Footer';
import Contact from './componenets/Contact';
import Service from './componenets/Service';
import Carrier from './componenets/Carrier';

import Security from './componenets/Security';
import Quality from './componenets/Quality';
import Development from './componenets/Development';
import Consultancy from './componenets/Consultancy';
import Staffing from './componenets/Staffing';
// import  Dropdown  from './componenets/Dropdown';
import Knowledge from './componenets/Knowledge';
import Case from './componenets/Case';
import Research from './componenets/Research';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
        <Navbar />
        <Routes>
          {/* Add your routes here */}
          {/* For example: */}
          <Route exact path ="/" element={<Home/>} />
          <Route path ="/about" element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/carrier' element={<Carrier/>} />
          <Route path='/security' element={<Security/>} />      
          <Route path='/quality' element={<Quality/>} />
          <Route path='/consultancy' element={<Consultancy/>} />
          <Route path='/development' element={<Development/>}/>
          <Route path='/knowledge' element={<Knowledge/>}/>
          <Route path ='/case'   element={<Case/>}/>
          <Route path ='/research'   element={<Research/>}/>
          <Route path ='/staffing'   element={<Staffing/>}/>
        

        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
