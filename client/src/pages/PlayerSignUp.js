import React, { useState, useEffect } from 'react';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Position from '../components/Position';
import Availability from '../components/Availability';

export default function PlayerSignUp() {
  const [formInfo, setFormInfo] = useState({});
  const [position, setPosition] = useState([]);
  const [availability, setAvailability]=useState([])

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // use brackets to signify the name in the state
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleCheckboxes = (event) => {
    const { value } = event.target;
    if (position.includes(value)) {
      const newArray = position.filter((position) => position !== value);
      setPosition(newArray);
    } else {
      setPosition([...position, value]);
    }
  };

  const handleAvailability = (event)=>{
    const { value } = event.target;
    if (availability.includes(value)) {
      const newArray = availability.filter((avail) => avail !== value);
      setAvailability(newArray);
    } else {
      setAvailability([...availability, value]);
    }
  }

  return (
    <>
      <h1 className='title is-1 has-text-centered'>Player SignUp</h1>

      <div className='container'>
        <Contact handleInputChange={handleInputChange} />
        <Location handleInputChange={handleInputChange} />
        <Position handleCheckboxes={handleCheckboxes} />
        <Availability handleAvailability={handleAvailability}/>
        <div className='field is-horizontal'>
          <div className='field-label'></div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <button className='button is-primary'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
