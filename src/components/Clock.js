// import
import React, { Fragment } from 'react'
import moment from 'moment'

const Clock = () => {
  const time = moment().format('LT')

  return (
    <Fragment>
      <div className='clock-display'>
        <p>{time}</p>
        <p>Do It Now!</p>
      </div>

    </Fragment>
  )
}

export default Clock
