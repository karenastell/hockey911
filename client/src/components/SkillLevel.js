import React from 'react';

export default function SkillLevel(props) {
  return (
    <div className='field is-horizontal'>
      <div className='field-label'>
        <label className='label'>Skill Level:</label>
      </div>
      <div className='field-body'>
        <div className='field'>

            <div className='control'>
              <div className='select'>
                <select
                  className='skill-level-select'
                  name='SillLevel'
                  onChange={props.handleSkillInputChange}
                >
                  <option>Select Skill Level</option>
                  <option value='A'>A</option>
                  <option value='B'>B</option>
                  <option value='C'>C</option>
                  <option value='D'>D</option>
                </select>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}
