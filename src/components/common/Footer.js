import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/ace', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com/ace', label: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/ace', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://instagram.com/ace', label: 'Instagram' },
  ];

  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/events', label: 'Events' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3>About ACE</h3>
            <p>
              The Association of Civil Engineering (ACE) is dedicated to promoting excellence
              in civil engineering education and research.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>123 Engineering Street, University Campus, City - 123456</span>
              </li>
              <li>
                <FaPhone />
                <span>+1 234 567 8900</span>
              </li>
              <li>
                <FaEnvelope />
                <span>contact@ace.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Association of Civil Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 