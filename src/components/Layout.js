// imports
import React, { Component, Fragment } from 'react'
// import axios from 'axios'

// unsplash api link
// const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=3RJ-uI47M6kgfpr5_vZCmbmHbVqLIIk09-mku8woFyQ'

class ShowPicture extends Component {
  constructor () {
    super()

    this.state = {
      pictureUrl: null
    }
  }

  // async componentDidMount() {
  //   // make http requests
  //   await axios({
  //     url: apiUrl,
  //     method: 'GET'
  //   })
  //     // .then(res => console.log(res.data.urls.small))
  //     .then(res => this.setState({ pictureUrl: res.data.urls.raw }))
  //     .catch(console.error)
  // }

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
      <Fragment>
        <h3>This picture is from Unsplash website</h3>
        {pictureDisplay}
      </Fragment>
    )
  }
}

export default ShowPicture
