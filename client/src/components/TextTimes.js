import React from 'react'

export default function TextTimes(props) {
    return (
        <div className='field is-horizontal'>
          <div className='field-label'>
            <label className='label'>TextTimes:</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleTextTimes}
                    value='4am-8am'
                    type='checkbox'
                  />
                  4am - 8am
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleTextTimes}
                    value='8am - 12pm'
                    type='checkbox'
                  />
                  8am - 12pm
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleTextTimes}
                    value='12pm - 4pm'
                    type='checkbox'
                  />
                  12pm - 4pm
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleTextTimes}
                    value='4pm - 8pm'
                    type='checkbox'
                  />
                  4pm - 8pm
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={props.handleTextTimes}
                    value='8pm - 12am'
                    type='checkbox'
                  />
                  8pm - 12am
                </label>
              </div>
            </div>
          </div>
        </div>
    )
}
