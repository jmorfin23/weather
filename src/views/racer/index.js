import React, {Component} from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerTable from '../../components/racerTable';

class Racer extends Component{

    constructor () {
      super();

      this.state = {
        'standings': []
      }
    }
    getStandings = async(e) => {
    e.preventDefault();

    let year = e.target.elements.year.value;
    let season = e.target.elements.season.value;

    let URL = `https://ergast.com/api/f1/${year}/${season}/driverStandings.json`;

    let response = await fetch(URL);
    let data = await response.json();

    this.setState({
      'standings': data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    });
  }
    render() {
    return (
      <div className="Racer">
        <RacerForm getStandings={this.getStandings}/>
        <RacerTable standings={this.state.standings}/>
      </div>
    );
  }
}

export default Racer;
