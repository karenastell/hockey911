import React from 'react';

export default function Contact(props) {
  return (
    <>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Contact Information:</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control is-expanded'>
              <input
                onChange={props.handleContactInputChange}
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
                onChange={props.handleContactInputChange}
                name='email'
                className='input'
                type='email'
                placeholder='Email'
              />
            </p>
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label'></div>
        <div className='field-body'>
          <div className='field is-expanded'>
            <div className='field has-addons'>
              <p className='control is-expanded'>
                <input
                  onChange={props.handleContactInputChange}
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
    </>
  );
}
