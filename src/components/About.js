import React from 'react';
import alliahImage from '../images/alliah.jpg';
import jhonImage from '../images/jhon.jpg';
import isabelaImage from '../images/isabela.jpg';
import johnImage from '../images/john.png';

const About = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">About Us</h1>
      
      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">About AlgePRO</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Our system is designed not only to respond to students’ algebraic queries but also to stimulate curiosity and interactive learning. By offering a step-based approach to problem-solving, AlgePRO caters to the diverse individual learning needs of students.
        </p>
      </section>
      
      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At AlgePRO, we are driven by a commitment to enhance algebraic proficiency among Grade 8 students in the Philippines through innovative educational technology. Recognizing the persistent challenge of low algebra proficiency, we have developed a unique Adaptive Learning System (ALS) utilizing the advanced capabilities of GPT-4 Turbo.
        </p>
        <h3 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">Meet our dedicated team members who make it all happen:</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <img src={alliahImage} alt="Alliah P. Magbanua" className="rounded-lg w-40 h-40 object-cover mx-auto mb-4"/>
            <p className="mt-4 text-lg font-medium text-gray-900">Alliah P. Magbanua</p>
          </div>
          <div className="text-center">
            <img src={jhonImage} alt="Jhon Mark B. Piñon" className="rounded-lg w-40 h-40 object-cover mx-auto mb-4"/>
            <p className="mt-4 text-lg font-medium text-gray-900">Jhon Mark B. Piñon</p>
          </div>
          <div className="text-center">
            <img src={isabelaImage} alt="Isabela Nicole G. Roslin" className="rounded-lg w-40 h-40 object-cover mx-auto mb-4"/>
            <p className="mt-4 text-lg font-medium text-gray-900">Isabela Nicole G. Roslin</p>
          </div>
          <div className="text-center">
            <img src={johnImage} alt="John Ronald B. Villamin" className="rounded-lg w-40 h-40 object-cover mx-auto mb-4"/>
            <p className="mt-4 text-lg font-medium text-gray-900">John Ronald B. Villamin</p>
          </div>
        </div>
      </section>
      
      <section className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We are committed to enhancing learning experiences by providing step-by-step responses tailored to the needs of each learner. If you are interested in collaboration or business partnerships, please reach out to us through any of our respective contact information listed below.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          <strong>Email address:</strong> algepro24@gmail.com
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Together, we strive to deliver excellence in everything we do, pushing the boundaries of innovation and creativity. Our diverse skill sets, and unified vision are the pillars that support our mission to bring impactful changes through our work. Thank you for visiting our site, and we look forward to engaging with you and exploring new horizons together!
        </p>
      </section>
    </div>
  );
};

export default About;
