// import
import React, { Fragment } from 'react'
import moment from 'moment'

const Clock = () => {
  const time = moment().format('LT')

  return (
    <Fragment>
      <div className='clock-display'>
        <div style={{ fontSize: '100px', fontWeight: 'bold' }} className='time-display'>
          <p>{time}</p>
        </div>
        <div className='greeting-display'>
          <p style={{ fontSize: '40px' }}>You Can Do It</p>
          <p style={{ textAlign: 'center', fontSize: '15px' }}>If you really try 😏</p>
        </div>
      </div>

    </Fragment>
  )
}

export default Clock
