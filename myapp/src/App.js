import React, { Component } from 'react'
import Form from './component/Form.js'
import Weather from './component/Weather.js'
// import './App.css'
const Apii = 'beaf39d73917591a5baba23a61c85e69'
class App extends Component {
  state = {
    Tempreature: '',
    City: '',
    Country: '',
    Humidity: '',
    Description: '',
    Error: ''
  }
  getWeather = async e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const apdi = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Apii}`
    )
    const data = await apdi.json()
    if (city && country) {
      this.setState({
        Tempreature: data.main.temp,
        City: data.name,
        Country: data.sys.country,
        Humidity: data.main.humidity,
        Description: data.weather[0].description,
        Error: ''
      })
    } else {
      this.setState({
        Tempreature: '',
        City: '',
        Country: '',
        Humidity: '',
        Description: '',
        Error: 'Please Enter The Data'
      })
    }
  }
  render () {
    return (
      <div className='wrapper'>
        <div className='form-container'>
          <Form getWeather={this.getWeather} />
          <Weather
            Tempreature={this.state.Tempreature}
            City={this.state.City}
            Country={this.state.Country}
            Humidity={this.state.Humidity}
            Description={this.state.Description}
            Error={this.state.Error}
          />
        </div>
      </div>
    )
  }
}

export default App
