import React from 'react';
import './App.scss';
import Navbar from './components/Navabar/Navbar';
import LisTours from './components/ListTours/ListTours';
//import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <main>
      <Navbar />
      <LisTours />
    </main>
  );
}

export default App;
