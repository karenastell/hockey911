import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="foot has-text-centered foot-font font-style">
        {/* <h2 className="foot-font">Hockey 911</h2> */}
        <p>
          &copy; 2020
          <a
            className="hover footer-links"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            > John Cassell </a
          >
           &  
          <a
            className="hover footer-links"
            href="https://github.com/karenastell"
            target="_blank"
            rel="noopener noreferrer"
            > Karen Astell</a
          >
        </p>
      </div>
    );
}
