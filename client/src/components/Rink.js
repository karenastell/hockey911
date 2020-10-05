import React from 'react'

export default function Rink(props) {
    return (
        <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Rink Name:</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control is-expanded'>
              <input
                onChange={props.handleContactInputChange}
                name='rink'
                className='input'
                type='text'
                placeholder='Name'
              />
            </p>
          </div>
        </div>
      </div>
    )
}
