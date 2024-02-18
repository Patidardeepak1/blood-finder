import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8 bg-red-100 mt-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-lg text-gray-600">Learn more about our blood finder service.</p>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="mb-4 text-center">At Blood Finder, our mission is to connect blood donors with those in need, providing a reliable and efficient platform for blood donation and transfusion.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
          <p className="mb-4 text-center">We envision a world where no one suffers due to lack of access to blood. Through our platform, we aim to make blood donation and transfusion accessible to all.</p>
          
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="mb-4 text-center">If you have any questions or feedback, feel free to contact us at <a href="mailto:contact@bloodfinder.com" className="text-red-600 hover:text-red-800">contact@bloodfinder.com</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
