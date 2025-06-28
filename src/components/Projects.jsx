import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiSocketdotio,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const techIconMap = {
  "MERN Stack": (
    <div className="flex gap-1 items-center">
      <SiMongodb className="text-green-500 text-lg" />
      <SiExpress className="text-gray-300 text-lg" />
      <SiReact className="text-blue-400 text-lg" />
      <SiNodedotjs className="text-green-400 text-lg" />
    </div>
  ),
  "Socket.IO": <SiSocketdotio className="text-white text-lg" />,
  JWT: <SiJsonwebtokens className="text-pink-400 text-lg" />,
  "React JS": <SiReact className="text-blue-400 text-lg" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-300 text-lg" />,
};

function Projects() {
  const projects = [
    {
      title: "Chat Website",
      description:
        "Real-time chat app like WhatsApp with image sharing, online status, secure auth (JWT), and Socket.IO powered communication.",
      technologies: ["MERN Stack", "Socket.IO", "JWT"],
      image: "chatappclone.jpg",
      link: "https://fullstack-chat-app-538s.onrender.com",
    },
    {
      title: "LinkedIn Clone",
      description:
        "LinkedIn-inspired platform with profiles, posts, comments, real-time notifications. Styled using Tailwind CSS.",
      technologies: ["MERN Stack", "Tailwind CSS"],
      image: "linkedinclone.jpg",
      link: "https://linkedin-clone-p9ax.onrender.com/",
    },
    {
      title: "Twitter Clone",
      description:
        "Pixel-perfect UI of Twitter with modern feed, sidebar, and profile layout — built using React and Tailwind CSS.",
      technologies: ["React JS", "Tailwind CSS"],
      image: "/twitterclone.jpg",
      link: "https://twitter-clone-ten-peach-69.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#0d1117] text-white font-['Poppins']"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-white/10 rounded-xl p-5 shadow-md hover:shadow-pink-500/20 transition duration-300 hover:scale-[1.03] flex flex-col"
            >
              {/* Project Screenshot */}
              <div className="w-full h-40 bg-[#1f2937] rounded-md overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-[#C4B5FD] mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#E4E6EB] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies with Icons */}
              <div className="flex flex-wrap gap-3 items-center mb-3">
                {project.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-[#2a2f3a] shadow-sm text-white"
                  >
                    {techIconMap[tech]}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              {/* Visit Site Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 hover:text-purple-400 text-sm font-medium mt-auto inline-flex items-center gap-1"
                >
                  Visit Site <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
