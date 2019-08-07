import React, {Component} from 'react';
import './index.css';


///can use function based components because it doesn't requrire other methods or a state

function RacerForm(props) {
  return (
    <div className="row">
    <div className='col-md-12'>
      <form onSubmit={props.getStandings}>
        <input type="text" name="year" placeholder="Year.." />
        <input type="text" name="season" placeholder="Season..." />
        <input type="submit" value="Get Standings" />
      </form>
    </div>
  </div>
  );
}

export default RacerForm;
