// AboutPage.js

import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800">
          About Our Government News Agency
        </h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          We, as the government news agency, are dedicated to providing
          accurate, timely, and impartial information to the citizens of our
          nation. Our mission is to uphold transparency, accountability, and
          public trust through our reporting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Team member cards */}
          <div className="bg-white p-6 rounded shadow-md">
            <img
              src="/images/1.jpg"
              alt="Team member"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">Jane Smith</h3>
            <p className="text-gray-700 text-sm">Senior Editor</p>
          </div>
          {/* Add more team member cards */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Company Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Our government news agency was established in 2015 with the aim of
          providing unbiased news coverage to the citizens. Over the years, we
          have evolved to embrace technological advancements and changing media
          landscapes, all while staying true to our core principles of
          journalistic integrity and public service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Community Engagement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We actively engage with our audience through various platforms and
          initiatives, including town hall meetings, social media campaigns, and
          educational outreach programs. We believe in fostering an informed
          citizenry and encouraging public dialogue on important issues.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          For inquiries or feedback, please contact us at:
          <br />
          Email: info@govnewsagency.gov
          <br />
          Phone: 90000000
          <br />
          Address: [Mulpani, Kathmandu, Nepal]
        </p>
      </section>
    </div>
  );
};

export default About;
