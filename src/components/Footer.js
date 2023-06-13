import React from "react";
import { pageLinks, socialMedia } from "../data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialMedia.map((social) => (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
