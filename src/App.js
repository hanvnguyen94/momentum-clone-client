// import logo from './logo.svg';
import React, { Fragment } from 'react'
import Layout from './components/Layout'
import Weather from './components/Weather'
import Header from './components/Header'

function App () {
  return (
    <Fragment>
      <Header />
      <Layout />
      <Weather />
    </Fragment>
  )
}
export default App
