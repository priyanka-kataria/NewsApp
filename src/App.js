
import { useState, useEffect } from 'react';
import './App.css';
import CloneTemplate from './componant/CloneTemplate';
import Nav from './componant/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App () {

  return (
    <>
      <BrowserRouter>
        <div style={ { 'display':'flex', 'flexDirection':'column'} }>
          <Nav />
          <Routes>
            <Route path="/" element={ <CloneTemplate cat="tesla" /> } ></Route>
            <Route path="/business" element={ <CloneTemplate cat="business" /> } ></Route>
            <Route path="/technology" element={ <CloneTemplate cat="technology" /> } ></Route>
            <Route path="/entertainment" element={ <CloneTemplate cat="entertainment" /> } ></Route>
            <Route path="/sports" element={ <CloneTemplate cat="sports" /> } ></Route>
            <Route path="/health" element={ <CloneTemplate cat="health" /> } ></Route>
            <Route path="/science" element={ <CloneTemplate cat="science" /> } ></Route>
            <Route path="/general" element={ <CloneTemplate cat="general" /> } ></Route>


          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;
