import React from "react";

const ContactFeedback = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-gray-900 text-gray-200 py-16 px-5"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Share Your Feedback
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Help us improve by sharing your thoughts and experiences. Your
          feedback is valuable!
        </p>

        {/* Feedback Form */}
        <form className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm md:text-base font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm md:text-base font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Feedback Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm md:text-base font-medium mb-2"
            >
              Your Feedback
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your feedback here..."
              className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500 resize-none transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 rounded-lg transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFeedback;
