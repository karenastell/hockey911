import React, { useState, useEffect } from 'react';
import Location from '../../components/Location/Location';
import Contact from '../../components/Contact/Contact';
import Position from '../../components/Position';
import Availability from '../../components/Availability/Availability';
import TextTimes from '../../components/TextTimes';
import SkillLevel from '../../components/SkillLevel/SkillLevel';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './PlayerSignUp.css';

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
    <div className='background'>
      <Nav/>
      <div className='container mt-5 mb-5 whiteText'>
        <h1 className='whiteText title is-1 has-text-centered'>
          Player Sign Up
        </h1>

        <div>
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
                  <button className='button submit-btn mb-5' onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
