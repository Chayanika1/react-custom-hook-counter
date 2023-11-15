import logo from './logo.svg';
import './App.css';
import React from 'react';
import ForwardCounter from './componants/ForwardCounter';
import BackwardCounter from './componants/BackwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter/>
      <BackwardCounter/>

    </React.Fragment>
  );
}

export default App;
