//import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed mb-8">
          Hi, I’m <span className="text-indigo-500 font-semibold">Preshita</span>! 👋 A passionate
          <span className="text-indigo-500 font-semibold"> Full Stack Developer </span>
          with a knack for crafting user-friendly, visually appealing, and efficient web
          applications. With a strong foundation in both frontend and backend technologies, I
          specialize in creating seamless digital experiences from start to finish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">What I Do</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Frontend Development with React.js and Tailwind CSS</li>
            <li>Backend Development with Node.js, Express.js, and MongoDB</li>
            <li>Building responsive and scalable web applications</li>
            <li>Collaborative problem-solving and teamwork</li>
          </ul>
        </div>
 
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">My Journey</h2>
          <p className="text-gray-300 leading-relaxed">
            I started my journey as a curious programmer and have since honed my skills through
            projects, internships, and consistent learning. My portfolio includes journal websites,
            dynamic portfolio projects, and other creative ventures showcasing my versatility.
          </p>
          <p className="mt-4 text-gray-300">
            Currently, I’m focused on mastering React and building projects that combine innovation
            and functionality.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Why Choose Me?</h2>
        <p className="text-gray-300 leading-relaxed">
          <span className="font-semibold text-indigo-500">Creativity Meets Functionality:</span> I
          believe great design is just as important as functionality, and I work hard to balance
          both in every project I undertake.
        </p>
        <p className="mt-4 text-gray-300">
          <span className="font-semibold text-indigo-500">Attention to Detail:</span> From clean
          code to pixel-perfect designs, I ensure every project meets high standards.
        </p>
        <p className="mt-4 text-gray-300">
          <span className="font-semibold text-indigo-500">Lifelong Learner:</span> Technology is
          ever-evolving, and so am I. I stay updated with the latest trends and tools in web
          development.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Interests</h2>
        <p className="text-gray-300 leading-relaxed">
          When I’m not coding, you’ll find me exploring new destinations, engaging in adventure
          sports, or enjoying a peaceful moment by the beach. My love for travel inspires me to
          bring creativity and fresh perspectives to my work.
        </p>
      </div>
    </section>
  );
};

export default About;
