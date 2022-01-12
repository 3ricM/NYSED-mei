import React from 'react';
import './css/SchoolCard.css';

function SchoolCard(props) {
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.name}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">{props.year}</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Ethnicity</span>
          <ul className="list-group">
            <li className="list-group-item">Number of Black Students: {props.black}</li>
            <li className="list-group-item">Number of Asian Students:  {props.asian}</li>
            <li className="list-group-item">Number of White Students:  {props.white}</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">School Report Card</li>
            <li className="list-group-item">Student and Educator Report</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
