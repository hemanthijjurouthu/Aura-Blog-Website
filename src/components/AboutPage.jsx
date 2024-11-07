import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-white-500 leading-relaxed">
          Our mission is to provide insightful, high-quality content that informs and inspires our readers.
          We are dedicated to sharing knowledge and stories that matter, and to fostering a community of curious and engaged readers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src="i1.png" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-center text-black">Manideep</h3>
            <p className="text-gray-700 text-center">Editor-in-Chief</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src="i2.jpeg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-center text-black">Harish</h3>
            <p className="text-gray-700 text-center">Senior Writer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src="i3.jpeg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-center text-black">Subramanyam</h3>
            <p className="text-gray-700 text-center">Community Manager</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our History</h2>
        <p className="text-white-500 leading-relaxed">
          Founded in 2020, our blog has grown from a small personal project into a trusted source of information and inspiration
          for thousands of readers around the world. We are proud of our journey and excited about the future.
        </p>
      </section>
    </div>
  );
};

export default About;
