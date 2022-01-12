import React from 'react';
import Navbar from './components/Navbar.js';
// Be sure to uncomment these components and the data before you use them!
import SchoolCard from './components/SchoolCard.js';
import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
        {data.map (school => (
            <SchoolCard
            name = {school.ENTITY_NAME}
            year = {school.YEAR}
            black = {school.NUM_BLACK}
            asian = {school.NUM_ASIAN}
            white = {school.NUM_WHITE}/>))}

            
        </div>
      </div>
    </div>
  );
}

export default App;
