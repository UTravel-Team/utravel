import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="social-media flex items-center gap-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="social-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon" />
      </a>
    </div>
  );
}

export default SocialMedia;