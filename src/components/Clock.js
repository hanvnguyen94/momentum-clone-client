// import
import React, { Fragment } from 'react'
import moment from 'moment'

const Clock = () => {
  const time = moment().format('LT')

  return (
    <Fragment>
      <div className='clock-display'>
        <div className='time-display'>
          <p>{time}</p>
        </div>
        <div className='greeting-display'>
          <p>You Can Do It!</p>
        </div>
      </div>

    </Fragment>
  )
}

export default Clock
