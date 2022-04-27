import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Routes, Route } from 'react-router-dom';
import {
  Header,
  Landing,
  About,
  Gallery,
  Contact

} from './utils';
import './App.scss';


function App() {
  return (
    <div className="App">
      <CSSTransition timeout={300}>
        <Header />
      </CSSTransition>

      <Routes>

        <Route exact path='/' element={<Landing />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/contact' element={<Contact />} />

      </Routes>

      

    </div>
  );
}

export default App;
