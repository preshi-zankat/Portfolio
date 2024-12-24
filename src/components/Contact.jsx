import  { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const [formStatus, setFormStatus] = useState(""); // State to manage form submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // State to manage form data

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("Your message has been sent successfully!"); // Success message
      setFormData({ name: "", email: "", message: "" }); // Clear form
    }, 1000); // Simulating an API call delay
  };

  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-indigo-500 mb-6 text-center">
          Contact Me
        </h1>
        <p className="text-lg mb-6 text-center">
          Have questions, want to collaborate, or just say hi? Reach out!
        </p>

        {formStatus && (
          <div className="bg-green-500 text-gray-900 px-4 py-2 rounded-lg mb-6 text-center">
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-gray-100 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-400">Or connect with me on:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/preshi-zankat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-2xl"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a
              href="https://www.linkedin.com/in/preshita-zankat-6bba9b295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-2xl"
            >
             <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a
              href="https://x.com/PreshitaZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-2xl"
            >
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
