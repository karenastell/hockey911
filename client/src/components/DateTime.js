import React from 'react';
import Day from './Day';

export default function DateTime(props) {
  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>Day/Time</label>
      </div>
      <Day handleCheckboxes={props.handleCheckboxes} />
      <div className='field'>
        <p className='control is-expanded'>
          <input className='input is-success' name='time' type='time' onChange={props.handleTimeInputChange} />
        </p>
      </div>
    </div>
  );
}
