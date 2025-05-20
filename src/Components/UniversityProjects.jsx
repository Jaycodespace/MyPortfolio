import { FaGithub } from "react-icons/fa";
import { UNIVERSITY_PROJECTS } from "../assets/Constants";

const UniversityProjects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <h2 className="text-5xl font-bold text-center mb-12 py-6 leading-tight gradient-text">
        University Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {UNIVERSITY_PROJECTS.map((project, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <span className="text-gray-400 text-sm">{project.date}</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 text-sm bg-gray-700/50 rounded-full text-gray-300">{tech}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <FaGithub className="text-xl" />
                  <span>View on GitHub</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UniversityProjects