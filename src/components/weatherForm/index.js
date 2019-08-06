import React, {Component} from 'react';
import './index.css';


class WeatherForm extends Component{
  render() {
    return (
    <div className="WeatherForm">
      <div className="row">
      <div className='col-md-12'>
        <form>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <input type="submit" value="Get Weather" />
        </form>
      </div>
    </div>
    </div> 
    );
  }
}

export default WeatherForm;