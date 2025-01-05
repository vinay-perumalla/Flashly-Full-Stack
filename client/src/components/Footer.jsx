import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t bg-gray-900 text-white'>
      <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
        {/* Copyright Section */}
        <p className='text-sm'>© All Rights Reserved {new Date().getFullYear()}.</p>

        {/* Social Media Links */}
        <div className='flex items-center gap-4 justify-center text-2xl'>
          <a 
            href='https://www.facebook.com' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='hover:text-primary-100'
          >
            <FaFacebook />
          </a>
          <a 
            href='https://www.instagram.com/vinay__6183/' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='hover:text-primary-100'
          >
            <FaInstagram />
          </a>
          <a 
            href='https://www.linkedin.com' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='hover:text-primary-100'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

