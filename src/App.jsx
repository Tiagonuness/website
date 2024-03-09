import React from 'react';
import Home from './pages/home/home';
import NavBar from './header/navbar';
import Socializar from './components/socializar/socializar';
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Socializar/>
      <Home />
    </div>
  );
}

export default App;
