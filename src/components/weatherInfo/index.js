import React, {Component} from 'react';
import './index.css';


class WeatherInfo extends Component{
  render() {
    let data = this.props.data;
    return (
      <div className="row">
        <div className="col-md-12">
        {/*below is an if statement, sayingif the data exists then show the information, must return one element from statement, which is why we wrapped all 5 h3's in a div */}
        { data.name &&
        <div>
          <h3>City: {data.name} </h3>
          <h3>Country: {data.sys.country} </h3>
          <h3>Temperature: {data.main.temp} </h3>
          <h3>Humidity: {data.main.humidity}</h3>
          <h3>Description: {data.weather[0].description}</h3>
        </div>
        }

        {/* Error message will appear if they put in a city that doesn't exist */}

        {
          data.cod === '404' &&
          <h3>Error: {data.message}</h3>
        }
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
