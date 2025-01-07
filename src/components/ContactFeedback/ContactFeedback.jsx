import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { Alert } from "../../Alert/Alert";

const ContactFeedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init();
  }, []);

  const onSubmit = (data) => {
    Alert(true, "Feedback submitted successfully!");
    reset();
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="dark:bg-gray-900 dark:text-white bg-gray-300 text-black py-16 px-5"
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 text-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm md:text-base font-medium mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className={`w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border ${
                errors.name ? "border-red-500" : "border-gray-600"
              } text-gray-200 focus:ring-2 focus:ring-blue-500 transition`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
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
              className={`w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-600"
              } text-gray-200 focus:ring-2 focus:ring-blue-500 transition`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
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
              className={`w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border ${
                errors.feedback ? "border-red-500" : "border-gray-600"
              } text-gray-200 focus:ring-2 focus:ring-blue-500 resize-none transition`}
              {...register("feedback", {
                required: "Feedback is required",
                minLength: {
                  value: 10,
                  message: "Feedback must be at least 10 characters long",
                },
              })}
            ></textarea>
            {errors.feedback && (
              <span className="text-red-500 text-sm">
                {errors.feedback.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Submit Feedback"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 rounded-lg transition duration-300"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactFeedback;
