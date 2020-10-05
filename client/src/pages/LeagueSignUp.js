import React, { useState } from 'react';
import Location from '../components/Location';
import Contact from '../components/Contact';
import SkillLevel from '../components/SkillLevel';

export default function LeagueSignUp() {
  const [contact, setContact] = useState({});
  const [skillLevel, setSkillLevel] = useState({});
  const [dateTime, setDateTime] = useState({});
  const [location, setLocation] = useState({});
  const [rink, setRink] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // use brackets to signify the name in the state
    setContact({ ...contact, [name]: value });
  };

//   const handleRinkInputChange = (event) => {
//     const { name, value } = event.target;

//     // use brackets to signify the name in the state
//     setRink({ ...rink, [name]: value });
//   };

  const handleSkillInputChange = (event) => {
    const { name, value } = event.target;

    // use brackets to signify the name in the state
    setSkillLevel({ ...skillLevel, [name]: value });
  };

  return (
    <>
      <h1 className='title is-1 has-text-centered'>League Sign Up</h1>
      <div className='container'>
        <Contact />
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Rink Name:</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <p className='control is-expanded'>
                <input
                  onChange={handleInputChange}
                  name='rink'
                  className='input'
                  type='text'
                  placeholder='Name'
                />
              </p>
            </div>
          </div>
        </div>
        <Location />
        <SkillLevel />
      </div>
    </>
  );
}
