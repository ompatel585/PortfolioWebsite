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

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const techIconMap = {
  "MERN Stack": (
    <div className="flex gap-1 items-center">
      <SiMongodb className="text-green-500 text-sm" />
      <SiExpress className="text-gray-300 text-sm" />
      <SiReact className="text-blue-400 text-sm" />
      <SiNodedotjs className="text-green-400 text-sm" />
    </div>
  ),
  "Socket.IO": <SiSocketdotio className="text-white text-sm" />,
  JWT: <SiJsonwebtokens className="text-pink-400 text-sm" />,
  "React JS": <SiReact className="text-blue-400 text-sm" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-300 text-sm" />,
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
        "LinkedIn-inspired platform with profiles, posts, comments, and real-time feed-like experience. Styled using Tailwind CSS.",
      technologies: ["MERN Stack", "Tailwind CSS"],
      image: "linkedinclone.jpg",
      link: "https://linkedin-clone-p9ax.onrender.com/",
    },
    {
      title: "Twitter Clone",
      description:
        "Pixel-perfect UI of Twitter with modern feed, sidebar, and profile layout — built using React and Tailwind CSS.",
      technologies: ["React JS", "Tailwind CSS"],
      image: "twitterclone.jpg",
      link: "https://twitter-clone-ten-peach-69.vercel.app/",
    },
    {
      title: "ThinkBoard - Whiteboard App",
      description:
        "Collaborative whiteboard built with MERN stack. Users can draw, type, and interact in real-time. Great for planning and visual thinking.",
      technologies: ["MERN Stack", "Socket.IO", "Tailwind CSS"],
      image: "ThinkBoard.jpg",
      link: "https://mern-thinkboard-ql79.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] text-white font-['Poppins'] relative"
    >
      {/* subtle glow behind cards */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-3xl absolute -top-32 left-8" />
        <div className="w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-3xl absolute bottom-0 right-8" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Featured Projects
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 50000 }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="pt-4 pb-4">
              <div
                className="bg-[#0b1120] border border-white/10 rounded-2xl p-6 shadow-xl 
hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-2 
flex flex-col h-[750px]"
              >
                {/* Image */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#C4B5FD] mb-2">
                  {project.title}
                </h3>

                {/* Description + Tech + Button */}
                <div className="flex flex-col flex-1">
                  <p className="text-[#E4E6EB] text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-[#2a2f3a] border border-white/10 shadow-inner text-white"
                      >
                        {techIconMap[tech]}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Visit Site */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-sm font-medium text-blue-400 hover:text-pink-400 inline-flex items-center gap-2"
                    >
                      Visit Site <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
