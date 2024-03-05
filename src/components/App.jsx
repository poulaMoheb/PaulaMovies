import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Genres from './Genres';
import MainPage from './MainPage';
import NavBar from './NavBar';
import SearchMov from './SearchMov';
import Series from './Series';
import SinglePage from './SinglePage';
import UserRequest from './userRequest';



function App() {


  return (<>
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/SinglePage/:id' element={<SinglePage />} />
            <Route path='/series' element={<Series />} />
            <Route path='/searchMov/:searchmov' element={<SearchMov />} />
            <Route path='/ContactUs' element={<UserRequest />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  </>

  );
}

export default App;
