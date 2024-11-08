import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-4">
      <p className="text-center">© {new Date().getFullYear()} Ramadan App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;