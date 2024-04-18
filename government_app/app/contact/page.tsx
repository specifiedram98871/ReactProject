'use client'
// pages/contact.js
import React from "react";

const Contact = () => {
  const handleRating = (rate) => {
    console.log(rate);
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-800 text-center">
        Contact Us
      </h1>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-gray-700 font-bold mb-2"
            >
              Ph_Number:
            </label>
            <input
              type="number"
              id="name"
              name="number"
              placeholder="Your Name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl text-center text-blue-800 mb-8">Feedback</h1>
        <div className="flex justify-center items-center">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div
              key={rating}
              className="text-4xl cursor-pointer text-gray-300"
              onClick={() => handleRating(rating)}
            >
              &#9733;
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p>Please select a rating.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
