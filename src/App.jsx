import { useState } from 'react';
import './App.css';
import Users from './components/Users';
import PostsId from './components/PostsId';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';


function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>
        <Route path='/' element={ <Welcome /> } />
        <Route path='/Users' element={ <Users /> } />
        <Route path='/posts/:id' element={ <PostsId /> } />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
