import React from 'react';
import TimeSlots from '../TimeSlots/TimeSlots';
import './Availability.css';


export default function Availability(props) {
  return (
    <div className='field is-horizontal'>
      <div className='field-label'>
        <label className='label'>Availability:</label>
      </div>
      <div className='field-body'>
        <table className='table is-bordered'>
          <thead className='table-background'>
            <tr>
              <th>
                <abbr title='Sunday'>Sun</abbr>
              </th>
              <th>
                <abbr title='Monday'>Mon</abbr>
              </th>
              <th>
                <abbr title='Tuesday'>Tues</abbr>
              </th>
              <th>
                <abbr title='Wednesday'>Wed</abbr>
              </th>
              <th>
                <abbr title='Thursday'>Thurs</abbr>
              </th>
              <th>
                <abbr title='Friday'>Fri</abbr>
              </th>
              <th>
                <abbr title='Saturday'>Sat</abbr>
              </th>
            </tr>
          </thead>

          <tbody>
            <TimeSlots
              handleAvailability={props.handleAvailability}
              time='4am - 8am'
            />
            <TimeSlots
              handleAvailability={props.handleAvailability}
              time='8am - 12pm'
            />
            <TimeSlots
              handleAvailability={props.handleAvailability}
              time='12pm - 6pm'
            />
            <TimeSlots
              handleAvailability={props.handleAvailability}
              time='6pm - 12am'
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
