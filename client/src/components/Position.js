import React from 'react'

export default function Position(props) {
    return (
        <div className='field is-horizontal'>
          <div className='field-label'>
            <label className='label'>Position:</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleCheckboxes}
                    value='Goalie'
                    type='checkbox'
                  />
                  Goalie
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleCheckboxes}
                    value='Defender'
                    type='checkbox'
                  />
                  Defender
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleCheckboxes}
                    value='Forward'
                    type='checkbox'
                  />
                  Forward
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleCheckboxes}
                    value='Ref'
                    type='checkbox'
                  />
                  Ref
                </label>
              </div>
            </div>
          </div>
        </div>
    )
}
