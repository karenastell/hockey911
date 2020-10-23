import React, { useState } from 'react';
import Location from '../../components/Location/Location';
import Contact from '../../components/Contact/Contact';
import SkillLevel from '../../components/SkillLevel/SkillLevel';
import Rink from '../../components/Rink/Rink';
import DateTime from '../../components/DateTime/DateTime';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './LeagueSignUp.css';

export default function LeagueSignUp() {
  const [contact, setContact] = useState({});
  const [skillLevel, setSkillLevel] = useState({});
  const [day, setDay] = useState([]);
  const [time, setTime] = useState({});

  let leagueInfo = {};

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

  const handleTimeInputChange = (event) => {
    const { name, value } = event.target;

    // use brackets to signify the name in the state
    setTime({ ...time, [name]: value });
  };

  const handleCheckboxes = (event) => {
    const { value } = event.target;
    if (day.includes(value)) {
      const newArray = day.filter((day) => day !== value);
      setDay(newArray);
    } else {
      setDay([...day, value]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // make an object with all of the player's information
    leagueInfo = {
      contact: contact,
      skillLevel: skillLevel,
      day: day,
      time: time,
    };
    console.log(leagueInfo);
  };

  return (
    <div className='background-league'>
      <Nav />
      <div className='container mt-5 mb-5 white-text-league'>
        <div className='mb-6'>
          <h1 className='title is-1 has-text-centered white-text-league'>
            League Sign Up
          </h1>
        </div>
        <div>
          <Contact handleContactInputChange={handleContactInputChange} />
          <Rink handleContactInputChange={handleContactInputChange} />
          <Location handleContactInputChange={handleContactInputChange} />
          <SkillLevel handleSkillInputChange={handleSkillInputChange} />
          <DateTime
            handleTimeInputChange={handleTimeInputChange}
            handleCheckboxes={handleCheckboxes}
          />
          <div className='field is-horizontal'>
            <div className='field-label'></div>
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <button
                    className='button mb-5 mt-5 submit-btn is-dark is-inverted is-outlined'
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
