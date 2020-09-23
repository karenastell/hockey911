import React, { useState, useEffect } from 'react';
import Location from '../components/Location';

export default function PlayerSignUp() {
  const [formInfo, setFormInfo] = useState({});
  const [goalie, setGoalie] = useState('');
  const [defender, setDefender] = useState('')
  const [forward, setForward] = useState('')
  const [ref, setRef] = useState('')
  const [position, setPosition]=useState([])

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

  return (
    <>
      <h1 className='title is-1 has-text-centered'>Player SignUp</h1>

      <div className='container'>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Contact Information:</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <p className='control is-expanded'>
                <input
                  onChange={handleInputChange}
                  name='name'
                  className='input'
                  type='text'
                  placeholder='Name'
                />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input
                  onChange={handleInputChange}
                  name='email'
                  className='input is-success'
                  type='email'
                  placeholder='Email'
                  value='email@email.com'
                />
              </p>
            </div>
          </div>
        </div>
        <Location handleInputChange={handleInputChange} />
        <div className='field is-horizontal'>
          <div className='field-label'></div>
          <div className='field-body'>
            <div className='field is-expanded'>
              <div className='field has-addons'>
                <p className='control is-expanded'>
                  <input
                    onChange={handleInputChange}
                    name='phone'
                    className='input'
                    type='tel'
                    placeholder='Your phone number'
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label'>
            <label className='label'>Position</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={handleCheckboxes}
                    value='Goalie'
                    type='checkbox'
                  />
                  Goalie
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={handleCheckboxes}
                    value='Defender'
                    type='checkbox'
                  />
                  Defender
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={handleCheckboxes}
                    value='Forward'
                    type='checkbox'
                  />
                  Forward
                </label>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input
                    onChange={handleCheckboxes}
                    value='Ref'
                    type='checkbox'
                  />
                  Ref
                </label>
              </div>
            </div>
          </div>
        </div>
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
