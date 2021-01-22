import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import messages from '../AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// import WeatherForm from '../shared/WeatherForm'

// http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=3edc9f0099d7cee3f5076a37e30609dc&zip=01603
// ${this.state.zip}

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=3edc9f0099d7cee3f5076a37e30609dc&zip='

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

  // async componentDidMount () {
  // // make http requests
  //   await axios({
  //     url: `${apiUrl}`,
  //     method: 'GET'
  //   })
  //     .then(res => this.setState({ city: res.data.name, currWeather: res.data.weather[0].main, currTemp: res.data.main.temp }))
  //     .catch(console.error)
  // }
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
       .then(res => this.setState({ city: res.data.name, currWeather: res.data.weather[0].main, currTemp: res.data.main.temp }))
       .catch(console.error)
   }

   render () {
     let weatherDisplay
     const { city, currWeather, currTemp } = this.state

     if (!city && !currWeather && !currTemp) {
       weatherDisplay = 'Loading forever...'
     } else {
       weatherDisplay = (
         <Fragment>
           <h3>{city}</h3>
           <h3>{currWeather}</h3>
           <h3>{currTemp}</h3>
         </Fragment>
       )
     }
     return (
       <div>
         <div className="row">
           <div className="col-sm-10 col-md-8 mx-auto mt-5">
             <h3>Search</h3>
             <Form.Group controlId="zip">
               <Form onSubmit={this.handleSubmit} inline>
                 <FormControl
                   type="number"
                   className="mr-sm-2"
                   required
                   name="zip"
                   value={this.state.zip}
                   placeholder="Enter zip code"
                   onChange={this.handleInputChange}
                 />
                 <Button type="submit" variant="outline-primary">Search</Button>
               </Form>
             </Form.Group>
           </div>
         </div>
         {weatherDisplay}
       </div>
     )
   }
}

export default ShowWeather
