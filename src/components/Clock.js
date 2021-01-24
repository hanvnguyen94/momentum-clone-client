// import
import React, { Fragment } from 'react'
import moment from 'moment'

const Clock = () => {
  const time = moment().format('LT')

  return (
    <Fragment>
      <div className='clock-display'>
        <div style={{ fontSize: '110px', fontWeight: 'bold' }} className='time-display'>
          <p>{time}</p>
        </div>
        <div className='greeting-display'>
          <p style={{ fontSize: '60px' }}>You Can Do It</p>
          <p style={{ textAlign: 'center', fontSize: '20px' }}>If you really try 😏</p>
        </div>
      </div>

    </Fragment>
  )
}

export default Clock
