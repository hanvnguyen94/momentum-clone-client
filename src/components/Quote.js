// import
import React, { Component, Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'

const apiUrl = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'

class ShowQuote extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: null,
      author: null
    }
  }

  async componentDidMount () {
    // make http requests
    await axios({
      url: apiUrl,
      method: 'GET'
    })
      .then(res => this.setState({ text: res.data.quotes[0].text, author: res.data.quotes[0].author }))
      .catch(console.error)
  }

  // render func
  render () {
    let quoteDisplay
    const { text, author } = this.state

    if (!text && !author) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    } else {
      quoteDisplay = (
        <Fragment>
          <p style={{ fontSize: '20px' }}>{text}</p>
          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.927)' }}>-{author}</p>
        </Fragment>
      )
    }
    return (
      <Card className='quote-display'>
        <Card.Body>
          <blockquote style={{ textAlign: 'center' }} className="blockquote mb-0">
            {quoteDisplay}
          </blockquote>
        </Card.Body>
      </Card>
    )
  }
}

export default ShowQuote
