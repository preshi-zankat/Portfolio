const Projects = () => {
    const projects = [
      {
        title: 'Mankevichar',
        description: 'A personal diary app to create, update, and delete journal entries.',
        link: 'https://mankevichar.vercel.app/',
      },
      {
        title: 'Netflix Clone',
        description: 'A clone of the Netflix website with user authentication and movie trailers.',
        link: 'https://github.com/preshi-zankat/Netflix-Clone',
      },
      {
        title: 'WanderLust',
        description: 'A travel blog website to share travel experiences and photos.',
        link: 'https://github.com/preshi-zankat/WanderLust',
      }
    ];
  
    return (
      <section className="bg-gray-900 text-gray-100 min-h-screen py-16">
        <div className="text-center max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-extrabold  mb-6">My Projects</h1>
          <p className="text-xl mb-8">
            Here are some of the projects I have worked on, showcasing my skills in Full Stack Development:
          </p>
  
          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-400 mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-400 text-lg font-semibold transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  