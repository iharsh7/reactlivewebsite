import { Component, useState } from 'react';
import { Route, Routes ,Navigate } from 'react-router-dom';
import About from './components/About';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  
  
  return (
 <>
      <Navbar/>
      <Introduction/>
      <About/>
      <Portfolio/>
      <Projects/>
      <Contact/>
      <Footer/>

      {/* <Routes>
  <Route path='/' element={<Introduction/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/portfolio' element={<Portfolio/>}/>

</Routes>  */}

 </>
  );
}

export default App;
