// import React from 'react';

import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav className='nav-background' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <img
            src='./puck.png'
            className='puck'
            alt='puck'
            width='112'
            height='28'
          />
          <span className='ml-2'>Hockey 911</span>
        </a>
      </div>
      <div class='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item'>Find a Skate</a>

          <a className='navbar-item'>Profile</a>
        </div>

        <div class='navbar-end'>*login logout buttons*</div>
      </div>
    </nav>
  );
}

// export default function Nav() {
//   return (
//     <nav
//       className='nav-background'
//       role='navigation'
//       aria-label='main navigation'
//     >
//       <div className='navbar-brand'>
//         <a href='#'>
//         </a>

//         <a
//           role='button'
//           className='navbar-burger burger'
//           aria-label='menu'
//           aria-expanded='false'
//           data-target='navbarBasicExample'
//         >
//           <span aria-hidden='true'></span>
//           <span aria-hidden='true'></span>
//           <span aria-hidden='true'></span>
//         </a>
//       </div>

//       <div id='navbarBasicExample' className='navbar-menu'>
// <div className='navbar-start'>
// <img src='./puck.png' className='puck' />

//   <a className='navbar-item'>Find a Skate</a>

//   <a className='navbar-item'>Profile</a>

// </div>

//         <div className='navbar-end'>
//           <div className='navbar-item'>
//             <div className='buttons'>
//               <a className='button is-primary'>
//                 <strong>Sign up</strong>
//               </a>
//               <a className='button is-light'>Log in</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
