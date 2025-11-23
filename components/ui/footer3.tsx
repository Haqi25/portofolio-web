"use client";

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

export function Footer3() {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      {/* SOCIAL ICONS */}
      <ul className="social-icon">
        <li><a className="social-icon__link" href="#"><IoLogoFacebook size={24} /></a></li>
        <li><a className="social-icon__link" href="#"><IoLogoTwitter size={24} /></a></li>
        <li><a className="social-icon__link" href="#"><IoLogoLinkedin size={24} /></a></li>
        <li><a className="social-icon__link" href="#"><IoLogoInstagram size={24} /></a></li>
      </ul>

      {/* MENU */}
      <ul className="menu">
        <li><a className="menu__link" href="#">Home</a></li>
        <li><a className="menu__link" href="#">About</a></li>
        <li><a className="menu__link" href="#">Services</a></li>
        <li><a className="menu__link" href="#">Team</a></li>
        <li><a className="menu__link" href="#">Contact</a></li>
      </ul>

      <p>&copy; 2025 Baihawi | All Rights Reserved</p>
    </footer>
  );
}
