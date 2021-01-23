// imports
import React, { Component } from 'react'
import axios from 'axios'

// unsplash api link
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=3RJ-uI47M6kgfpr5_vZCmbmHbVqLIIk09-mku8woFyQ'

// const homeStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundSize: 'cover',
//   backgroundPosition: 'fixed',
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
      pictureDisplay = <img style={{ width: '100%' }} src={pictureUrl} alt='random photos from unplash'/>
    }

    return (
      // <div className={homeStyles}>
      <div className='background-img'>
        {pictureDisplay}
      </div>
      // </div>
    )
  }
}

export default ShowPicture
