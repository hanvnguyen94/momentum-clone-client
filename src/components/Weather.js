import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=3edc9f0099d7cee3f5076a37e30609dc&zip='

class ShowWeather extends Component {
  constructor (props) {
    super(props)

    this.state = {
      zip: '',
      city: null,
      currWeather: null,
      currTemp: null
    }
  }
  // change zip state to whatever user put in

  handleInputChange = (event) => {
    event.persist()
    this.setState({ zip: event.target.value })
  }

   handleSubmit = (event) => {
     event.preventDefault()
     const { zip } = this.state
     axios.get(`${apiUrl}${zip}`)
     // .then(res => console.log(res))
       .then(res => this.setState({ zip: '', city: res.data.name, currWeather: res.data.weather[0].main, currTemp: res.data.main.temp }))
       .catch(console.error)
   }

   render () {
     let weatherDisplay
     const { city, currWeather, currTemp } = this.state

     if (!city && !currWeather && !currTemp) {
       weatherDisplay = ''
     } else {
       weatherDisplay = (
         <Fragment>
           <h3>{city}</h3>
           <h3>{currWeather}</h3>
           <h3>{currTemp}°F</h3>
         </Fragment>
       )
     }
     return (
       <Nav className="justify-content-end">
         <Nav.Item>
           <Form.Group controlId="zip">
             <Form onSubmit={this.handleSubmit} inline>
               <FormControl
                 type="text"
                 className="mr-sm-2"
                 required
                 name="zip"
                 value={this.state.zip}
                 placeholder="Enter zip code"
                 onChange={this.handleInputChange}
               />
               <Button className='search-btn' type="submit" variant="outline-primary">Search</Button>
             </Form>
           </Form.Group>
           <div style={{ border: '1px solid white', textAlign: 'center' }}>{weatherDisplay}</div>
         </Nav.Item>
       </Nav>
     )
   }
}

export default ShowWeather
