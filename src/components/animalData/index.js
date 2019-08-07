import React, {Component} from 'react';
import './index.css';


class AnimalData extends Component{
  render() {

    let name = this.props.name;
    let species = this.props.species;

    return (
    <div className="AnimalData">
    <div className="makebigger"> {name} </div>
    <div className="makebigger"> {species} </div>
    </div>
    );
  }
}

export default AnimalData;
