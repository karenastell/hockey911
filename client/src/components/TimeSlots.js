import React from 'react';

export default function TimeSlots(props) {
  return (
    <tr>
      <td>
        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input
                onChange={props.handleAvailability}
                value={props.time + ' Sunday'}
                type='checkbox'
              />
              {props.time}
            </label>
          </div>
        </div>
      </td>
      <td>
        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input
                onChange={props.handleAvailability}
                value={props.time + ' Monday'}
                type='checkbox'
              />
               {props.time}
            </label>
          </div>
        </div>
      </td>
      <td>
        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input
                onChange={props.handleAvailability}
                value={props.time + ' Tuesday'}
                type='checkbox'
              />
              {props.time}
            </label>
          </div>
        </div>
      </td>
      <td>
        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input
                onChange={props.handleAvailability}
                value={props.time + ' Wednesday'}
                type='checkbox'
              />
               {props.time}
            </label>
          </div>
        </div>
      </td>
      <td>
        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input
                onChange={props.handleAvailability}
                value={props.time + ' Thursday'}
                type='checkbox'
              />
               {props.time}
            </label>
          </div>
        </div>
      </td>
      <td>
        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input
                onChange={props.handleAvailability}
                value={props.time + ' Friday'}
                type='checkbox'
              />
               {props.time}
            </label>
          </div>
        </div>
      </td>
      <td>
        <div className='field'>
          <div className='control'>
            <label className='checkbox'>
              <input
                onChange={props.handleAvailability}
                value={props.time + ' Saturday'}
                type='checkbox'
              />
               {props.time}
            </label>
          </div>
        </div>
      </td>
    </tr>
  );
}
