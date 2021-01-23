// import logo from './logo.svg';
import React, { Fragment } from 'react'
import Layout from './components/Layout'
import Weather from './components/Weather'
import Quote from './components/Quote'
import Clock from './components/Clock'
// import { Header } from 'react-bootstrap/lib/Modal'

function App () {
  return (
    <Fragment>
      <Layout />
      <Weather />
      <Clock />
      <Quote />
    </Fragment>
  )
}
export default App
