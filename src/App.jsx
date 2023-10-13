import React from 'react';
import "./App.css"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { DataProvider } from './DataContext';
import Data from './Data';
import CreateData from './CreateData';
import UpdateData from './UpdateData';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Data/>} />
          <Route path="/create" element = {<CreateData/>} />
          <Route path="/update/:id" element = {<UpdateData/>} />
        </Routes>
      </BrowserRouter>
     </DataProvider>
  );
}

export default App;
