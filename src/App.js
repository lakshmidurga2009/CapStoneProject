import React from 'react'
import './App.css';
import Navbar from'./Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginSignup from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>  
      <BrowserRouter>
      <Navbar/>
      <Routes>
  
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      <Footer/>
      
      </BrowserRouter>    


    </div>
  );
}

export default App;
