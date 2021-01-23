// imports
import React, { Component } from 'react'
import axios from 'axios'

// unsplash api link
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=3RJ-uI47M6kgfpr5_vZCmbmHbVqLIIk09-mku8woFyQ'

// const homeStyles = {
//   width: '100vw',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundSize: 'cover',
//   backgroundPosition: 'absolute',
//   height: '100vh',
//   textAlign: 'center'
// }

class ShowPicture extends Component {
  constructor () {
    super()

    this.state = {
      pictureUrl: null
    }
  }

  async componentDidMount () {
    // make http requests
    await axios({
      url: apiUrl,
      method: 'GET'
    })
      // .then(res => console.log(res.data))
      .then(res => this.setState({ pictureUrl: res.data.urls.regular }))
      .catch(console.error)
  }

  // render func
  render () {
    let pictureDisplay
    const { pictureUrl } = this.state

    if (!pictureUrl) {
      pictureDisplay = 'Loading forever...'
    } else {
      pictureDisplay = <img style={{ width: '100%', zIndex: '-1' }} src={pictureUrl} alt='random photos from unplash'/>
    }

    return (
      <div className='layout-display'>
        {pictureDisplay}
      </div>
    )
  }
}

export default ShowPicture
