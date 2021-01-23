// import logo from './logo.svg';
import React from 'react'
import Layout from './components/Layout'
import Weather from './components/Weather'
import Quote from './components/Quote'
import Clock from './components/Clock'
// import { Header } from 'react-bootstrap/lib/Modal'

function App () {
  return (
    <div className='container'>
      <div className='top-row'>
        <div className='top-left'></div>
        <div className='top-center'></div>
        <div className='top-right'><Weather /></div>
      </div>
      <Layout />
      <Clock />
      <Quote className='quote' />
    </div>

  )
}
export default App
