export default function Portfolio() {
  const projects = [
    {
  title: "Voting APP",
  description:
    "This is a backend application for a voting system where users can vote for candidates. It provides functionalities for user authentication, candidate management, and voting.",
  github: "https://github.com/vijayasri14/Voting_App",
  stack: "Node.js, Express.js, MongoDB, JSON Web Tokens (JWT) for authentication",
},

  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            My Node.js Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            Live hosted projects built with Node.js, Express, and MongoDB
          </p>
        </header>

        {/* Center project card */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 w-full md:w-2/3"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Stack: {project.stack}
              </p>

              <div className="flex justify-between">
                
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-700 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-600">
          <p>Built with ❤️ using React, TailwindCSS, and deployed on Vercel.</p>
        </footer>
      </div>
    </div>
  );
}
