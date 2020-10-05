import React, { useState, useEffect } from 'react';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Position from '../components/Position';
import Availability from '../components/Availability';
import TextTimes from '../components/TextTimes';
import SkillLevel from '../components/SkillLevel';

export default function PlayerSignUp() {
  const [contact, setContact] = useState({});
  const [position, setPosition] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [textTimes, setTextTimes] = useState([]);
  const [skillLevel, setSkillLevel] = useState({});

  let playerInfo = {};

  const handleContactInputChange = (event) => {
    const { name, value } = event.target;

    // use brackets to signify the name in the state
    setContact({ ...contact, [name]: value });
  };

  const handleSkillInputChange = (event) => {
    const { name, value } = event.target;

    // use brackets to signify the name in the state
    setSkillLevel({ ...skillLevel, [name]: value });
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

  const handleAvailability = (event) => {
    const { value } = event.target;
    if (availability.includes(value)) {
      const newArray = availability.filter((avail) => avail !== value);
      setAvailability(newArray);
    } else {
      setAvailability([...availability, value]);
    }
  };

  const handleTextTimes = (event) => {
    const { value } = event.target;
    if (textTimes.includes(value)) {
      const newArray = textTimes.filter((avail) => avail !== value);
      setTextTimes(newArray);
    } else {
      setTextTimes([...textTimes, value]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // make an object with all of the player's information
    playerInfo = {
      contact: contact,
      position: position,
      skillLevel: skillLevel,
      availability: availability,
      textTimes: textTimes,
    };
    console.log(playerInfo);
  };

  return (
    <>
      <h1 className='title is-1 has-text-centered'>Player Sign Up</h1>

      <div className='container'>
        <Contact handleContactInputChange={handleContactInputChange} />
        <Location handleContactInputChange={handleContactInputChange} />
        <Position handleCheckboxes={handleCheckboxes} />
        <SkillLevel handleSkillInputChange={handleSkillInputChange} />
        <Availability handleAvailability={handleAvailability} />
        <TextTimes handleTextTimes={handleTextTimes} />
        <div className='field is-horizontal'>
          <div className='field-label'></div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <button className='button is-primary' onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
