import React from 'react';

export default function Day(props) {
  return (
    <div className='field-body'>
      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input
              onChange={props.handleCheckboxes}
              value='Sunday'
              type='checkbox'
            />
            Sunday
          </label>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input
              onChange={props.handleCheckboxes}
              value='Monday'
              type='checkbox'
            />
            Monday
          </label>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input
              onChange={props.handleCheckboxes}
              value='Tuesday'
              type='checkbox'
            />
            Tuesday
          </label>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input
              onChange={props.handleCheckboxes}
              value='Wednesday'
              type='checkbox'
            />
            Wednesday
          </label>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input
              onChange={props.handleCheckboxes}
              value='Thursday'
              type='checkbox'
            />
            Thursday
          </label>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input
              onChange={props.handleCheckboxes}
              value='Friday'
              type='checkbox'
            />
            Friday
          </label>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <input
              onChange={props.handleCheckboxes}
              value='Saturday'
              type='checkbox'
            />
            Saturday
          </label>
        </div>
      </div>
    </div>
  );
}
