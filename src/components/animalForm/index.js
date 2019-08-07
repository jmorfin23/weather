import React, {Component} from 'react';
import './index.css';



class AnimalForm extends Component{
  render() {
    return (
    <div className="AnimalForm">
      <div className="row">
      <div className='col-md-12'>
        <form onSubmit={this.props.getData}>
          <input type="text" name="name" placeholder="name" />
          <input type="submit" value="Get info" />
        </form>
      </div>
    </div>
    </div>
    );
  }
}

export default AnimalForm;
