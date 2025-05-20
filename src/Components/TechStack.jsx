import { RiReactjsLine } from "react-icons/ri";
import { DiNodejsSmall, DiPython, DiJavascript1, DiHtml5, DiCss3, DiGit, DiMongodb, DiMysql, DiGithubBadge } from "react-icons/di";
import { SiTailwindcss, SiSqlite, SiMysql } from "react-icons/si";
import { FaJava, FaPhp } from "react-icons/fa";
import { SiCplusplus, SiC, SiExpress, SiDjango, SiPostman, SiTensorflow, SiPytorch } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const TechStack = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <h2 className="text-5xl font-bold text-center mb-12 py-6 leading-tight gradient-text">
        Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Programming Languages */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
          <h3 className="text-xl font-thin text-white mb-4 border-b border-gray-700 pb-2 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <DiJavascript1 className="text-4xl text-yellow-400 hover:scale-110 transition-transform duration-300" />
            <DiPython className="text-4xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            <FaJava className="text-4xl text-red-600 hover:scale-110 transition-transform duration-300" />
            <SiCplusplus className="text-4xl text-blue-500 hover:scale-110 transition-transform duration-300" />
            <SiC className="text-4xl text-blue-300 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
          <h3 className="text-xl font-thin text-white mb-4 border-b border-gray-700 pb-2 text-center">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <RiReactjsLine className="text-4xl text-cyan-400 hover:scale-110 transition-transform duration-300" />
            <SiTailwindcss className="text-4xl text-cyan-500 hover:scale-110 transition-transform duration-300" />
            <DiHtml5 className="text-4xl text-orange-600 hover:scale-110 transition-transform duration-300" />
            <DiCss3 className="text-4xl text-blue-600 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
          <h3 className="text-xl font-thin text-white mb-4 border-b border-gray-700 pb-2 text-center">Backend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <DiNodejsSmall className="text-4xl text-green-600 hover:scale-110 transition-transform duration-300" />
            <SiExpress className="text-4xl text-gray-400 hover:scale-110 transition-transform duration-300" />
            <SiDjango className="text-4xl text-green-800 hover:scale-110 transition-transform duration-300" />
            <FaPhp className="text-4xl text-blue-400 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Database */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
          <h3 className="text-xl font-thin text-white mb-4 border-b border-gray-700 pb-2 text-center">Database</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <DiMongodb className="text-4xl text-green-700 hover:scale-110 transition-transform duration-300" />
            <SiMysql className="text-4xl text-blue-600 hover:scale-110 transition-transform duration-300" />
            <SiSqlite className="text-4xl text-blue-800 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
          <h3 className="text-xl font-thin text-white mb-4 border-b border-gray-700 pb-2 text-center">Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <DiGit className="text-4xl text-orange-500 hover:scale-110 transition-transform duration-300" />
            <DiGithubBadge className="text-4xl text-white hover:scale-110 transition-transform duration-300" />
            <SiPostman className="text-4xl text-orange-400 hover:scale-110 transition-transform duration-300" />
            <BiLogoVisualStudio className="text-4xl text-blue-400 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* AI/ML */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
          <h3 className="text-xl font-thin text-white mb-4 border-b border-gray-700 pb-2 text-center">AI/ML</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SiTensorflow className="text-4xl text-yellow-600 hover:scale-110 transition-transform duration-300" />
            <SiPytorch className="text-4xl text-orange-600 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack