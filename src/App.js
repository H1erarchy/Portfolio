import './App.css';
import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Calculator from './Projects/Calculator';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'


function App() {


  return (
    <div>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/calculator' element={<Calculator/>}/>
    <Route path='/slungs/:name/:apple'element={<Hero/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    
     
    </div>
  );
}

export default App;
