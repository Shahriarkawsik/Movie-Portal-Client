import React from "react";
import about from "../../assets/image/BG/about.jpg";
const About = () => {
  return (
    <section className="bg-gray-900 text-gray-200 py-16 px-5">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Our Movie Portal
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Discover a world of entertainment with us. We bring the latest and
          greatest movies from all genres, making your movie-watching experience
          seamless and enjoyable.
        </p>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Our Platform?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                Vast collection of movies from various genres.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                High-quality streaming with no interruptions.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                Personalized recommendations tailored to your taste.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                Watch anywhere, anytime with multi-device support.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                Affordable subscription plans for all.
              </li>
            </ul>
          </div>

          {/* Right Side Content */}
          <div className="relative">
            <img
              src={about}
              alt="Movie Portal Showcase"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-400 mt-4 italic">
              Enjoy movies like never before with our immersive platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
