import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-gray-800 text-gray-200 py-10 mt-52 relative bottom-0"
    >
      <div className="container mx-auto px-5">
        {/* Flex container for larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Eco-Adventure Experiences
            </h2>
            <p className="text-sm">
              Explore the best adventures around the world with expert guidance.
              Embark on your journey with us!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a href="/adventures" className="hover:underline">
                  Adventures
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>Email: info@eco-adventures.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Adventure Lane, Nature City</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/shahriar.kawsik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href="https://x.com/ShahriarKawsik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriar-kawsik-21916117b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/shahriar.kawsik/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center border-t border-gray-700 pt-5">
          <p className="text-sm">
            &copy; 2024 Eco-Adventure Experiences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
