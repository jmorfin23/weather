import React, {Component} from 'react';
import './index.css';
import AnimalData from '../../components/animalData';
import AnimalForm from '../../components/animalForm';

class Animal extends Component{
  constructor() {
    super();

    this.state = {
      'name': '',
      'species': ''
    }
  }
  // ?question async function again.
  getData = async(e) => {
    //preventing refresh
    e.preventDefault()
    let name  = e.target.elements.name.value

    const URL = 'https://learnwebcode.github.io/json-example/animals-1.json';

    let response = await fetch(URL);
    let data2 = await response.json();

    for (let i in data2) {
      if (data2[i]['name'] === name) {
        this.setState({
          'name': data2[i].name,
          'species': data2[i].species
        });
      }
    }
  }

  render() {
    return (
    <div className="Animal">
    <div>
    <AnimalForm getData={this.getData} />
    </div>
    <div>
      <AnimalData name={this.state.name} species={this.state.species}/>
    </div>
    </div>
    );
  }
}

export default Animal;
