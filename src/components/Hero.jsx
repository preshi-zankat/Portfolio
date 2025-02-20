import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-indigo-500">Preshita</span>
        </h1>
        <p className="text-xl leading-relaxed mb-6">
          I’m a Full Stack Developer passionate about building beautiful, efficient, and scalable web applications.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-7 mt-6 justify-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/preshita-zankat-6bba9b295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/itspreshi_03/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/PreshitaZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
