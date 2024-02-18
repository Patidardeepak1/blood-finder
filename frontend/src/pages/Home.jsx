import React from 'react';
import bloodHeaderImg from '../assets/blood-header.jpg';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <div className="relative">
  <img src={bloodHeaderImg} alt="Blood Header" className="w-full h-auto" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-2">BloodFinder</h1>
    <p className="mb-8 text-lg">BloodFinder is a non-profit platform to search blood donors available around your locality, who registered as a volunteer blood donor</p>
    <a href="/blood" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Find Blood Here</a>
  </div>
</div>



      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
       
        
        <div className="bg-red-100 rounded-lg p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-600">SEARCH</h2>
          <ul className="list-disc pl-6">
            <li>Get donors who are willing to donate anywhere in the world. Donor prediction is based on their priority, so chances of donating are more.</li>
            <li>Get nearest Blood bank details with Contact numbers.</li>
            <li>Access from any internet-enabled device.</li>
          </ul>
        </div>
        
        <div className="bg-red-100 rounded-lg p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-600">BENEFITS</h2>
          <ul className="list-disc pl-6">
            <li>More you donate, more chances of getting donor based on priority.</li>
            <li>Set status to 'Recently donated' or 'feeling sick' or 'inactive' so that you will not be disturbed and they get the right donor.</li>
            <li>Set your donation status once, your status will be automatically changed periodically.</li>
          </ul>
        </div>
        
        <div className="bg-red-100 rounded-lg p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-600">CLOUD</h2>
          <ul className="list-disc pl-6">
            <li>Data Encrypted over cloud.</li>
            <li>Email Validation for identity verification.</li>
            <li>Enhanced security for donor privacy. </li>
            
            <li>Our platform is to connect who are willing to donate, it's your responsibility to contact donor.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
