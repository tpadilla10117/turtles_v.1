import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Routes, Route } from 'react-router-dom';
import {
  Header,
  Footer,
  Landing

} from './utils';
import './App.scss';


function App() {
  return (
    <div className="App">
      <CSSTransition timeout={300}>
        <Header />
      </CSSTransition>

      <Routes>
        <Route path='/' element={<Landing />} />

      </Routes>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
