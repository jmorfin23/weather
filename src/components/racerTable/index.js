import React, {Component} from 'react';
import './index.css';


///can use function based components because it doesn't requrire other methods or a state

function RacerTable(props) {
  console.log(props.standings);
  return (
    <div className="row">
    <div className='col-md-12'>
      <table className="table-dark table">
        <thead>
          <tr>
            <th> Position </th>
            <th> Name </th>
            <th> Nationality </th>
            <th> Sponsor </th>
            <th> Points </th>
          </tr>
        </thead>
        <tbody>
          {
            props.standings[0] &&
              props.standings.map(driver =>
                <tr key={driver.position}>
                  <td> {driver.position} </td>
                  <td> {driver.Driver.givenName} {driver.Driver.familyName}</td>
                  <td> {driver.Driver.nationality} </td>
                  <td> {driver.Constructors[0].name} </td>
                  <td> {driver.points} </td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default RacerTable;
