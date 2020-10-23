import React from 'react';
import Day from '../Day/Day';
import './DateTime.css';

export default function DateTime(props) {
  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>Day/Time</label>
      </div>
      <Day handleCheckboxes={props.handleCheckboxes} />
      <div className='field'>
        <p className='control is-expanded'>
          <input className='input input-border' name='time' type='time' onChange={props.handleTimeInputChange} />
        </p>
      </div>
    </div>
  );
}
