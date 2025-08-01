


// import {
//   SiMongodb,
//   SiExpress,
//   SiReact,
//   SiNodedotjs,
//   SiSocketdotio,
//   SiTailwindcss,
//   SiJsonwebtokens,
//   SiRedux,
//   SiPaypal,
// } from "react-icons/si";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { BsBoundingBoxCircles } from "react-icons/bs";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const techIconMap = {
//   "MERN Stack": (
//     <div className="flex gap-1 items-center">
//       <SiMongodb className="text-green-500 text-lg" />
//       <SiExpress className="text-gray-300 text-lg" />
//       <SiReact className="text-blue-400 text-lg" />
//       <SiNodedotjs className="text-green-400 text-lg" />
//     </div>
//   ),
//   "Socket.IO": <SiSocketdotio className="text-white text-lg" />,
//   JWT: <SiJsonwebtokens className="text-pink-400 text-lg" />,
//   "React JS": <SiReact className="text-blue-400 text-lg" />,
//   "Tailwind CSS": <SiTailwindcss className="text-teal-300 text-lg" />,
//   Redux: <SiRedux className="text-purple-400 text-lg" />,
//   PayPal: <SiPaypal className="text-yellow-400 text-lg" />,
//   "shadcn/ui": <BsBoundingBoxCircles className="text-pink-300 text-lg" />,
// };

// function Projects() {
//   const projects = [
//     {
//       title: "Chat Website",
//       description:
//         "Real-time chat app like WhatsApp with image sharing, online status, secure auth (JWT), and Socket.IO powered communication.",
//       technologies: ["MERN Stack", "Socket.IO", "JWT"],
//       image: "chatappclone.jpg",
//       link: "https://fullstack-chat-app-538s.onrender.com",
//     },
//     {
//       title: "LinkedIn Clone",
//       description:
//        "LinkedIn-inspired platform featuring user authentication, profile creation, post publishing with like and comment support, and connection requests between users. Styled with responsive UI using Tailwind CSS.",
//       technologies: ["MERN Stack", "Tailwind CSS"],
//       image: "linkedinclone.jpg",
//       link: "https://linkedin-clone-p9ax.onrender.com/",
//     },
//     {
//       title: "Twitter Clone",
//       description:
//         "Pixel-perfect UI of Twitter with modern feed, sidebar, and profile layout — built using React and Tailwind CSS.",
//       technologies: ["React JS", "Tailwind CSS"],
//       image: "twitterclone.jpg",
//       link: "https://twitter-clone-ten-peach-69.vercel.app/",
//     },
//     {
//       title: "ThinkBoard Notes App",
//       description:
//         "Collaborative whiteboard built with MERN stack. Users can draw, type, and interact in real-time. Great for planning and visual thinking.",
//       technologies: ["MERN Stack", "Socket.IO", "Tailwind CSS"],
//       image: "ThinkBoard.jpg",
//       link: "https://mern-thinkboard-ql79.onrender.com/",
//     },
//     {
//       title: "E-Commerce Platform",
//       description:
//         "Full-featured e-commerce site with product listing, cart, checkout, secure payments using PayPal, state management via Redux, and elegant UI built using shadcn/ui and Tailwind.",
//       technologies: ["MERN Stack", "Redux", "PayPal", "shadcn/ui"],
//       image: "ecommerce.png", // make sure this image is available in your public/assets folder
//       link: "https://e-commerce-plateform.onrender.com/",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="py-24 bg-[#0d1117] text-white font-['Poppins']"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//           Projects
//         </h2>

//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation
//           autoplay={{ delay: 5000 }}
//           loop
//           spaceBetween={20}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index} className="h-full">
//               <div className="bg-[#161b22] border border-white/10 rounded-xl p-5 shadow-md hover:shadow-pink-500/20 transition duration-300 hover:scale-[1.03] flex flex-col min-h-[800px]">
//                 {/* Image */}
//                 <div className="w-full h-40 bg-[#1f2937] rounded-md overflow-hidden mb-4">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover object-top"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-semibold text-[#C4B5FD] mb-2">
//                   {project.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-[#E4E6EB] text-sm mb-4 leading-relaxed flex-grow">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-3 items-center mb-3">
//                   {project.technologies.map((tech, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-[#2a2f3a] shadow-sm text-white"
//                     >
//                       {techIconMap[tech]}
//                       <span>{tech}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Button */}
//                 {project.link && (
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:text-purple-400 text-sm font-medium mt-auto inline-flex items-center gap-1"
//                   >
//                     Visit Site <FaExternalLinkAlt className="text-xs" />
//                   </a>
//                 )}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default Projects;


import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiSocketdotio,
  SiTailwindcss,
  SiJsonwebtokens,
  SiRedux,
  SiPaypal,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsBoundingBoxCircles } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const techIconMap = {
  "MERN Stack": (
    <div className="flex gap-1 items-center">
      <SiMongodb className="text-green-500" />
      <SiExpress className="text-gray-300" />
      <SiReact className="text-blue-400" />
      <SiNodedotjs className="text-green-400" />
    </div>
  ),
  "Socket.IO": <SiSocketdotio className="text-white" />,
  JWT: <SiJsonwebtokens className="text-pink-400" />,
  "React JS": <SiReact className="text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-300" />,
  Redux: <SiRedux className="text-purple-400" />,
  PayPal: <SiPaypal className="text-yellow-400" />,
  "shadcn/ui": <BsBoundingBoxCircles className="text-pink-300" />,
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
        "LinkedIn-inspired platform with user authentication, profile creation, post publishing, and connection requests. Styled with Tailwind CSS.",
      technologies: ["MERN Stack", "Tailwind CSS"],
      image: "linkedinclone.jpg",
      link: "https://linkedin-clone-p9ax.onrender.com/",
    },
    {
      title: "Twitter Clone",
      description:
        "Pixel-perfect Twitter UI with feed, sidebar, and profile — built using React and Tailwind CSS.",
      technologies: ["React JS", "Tailwind CSS"],
      image: "twitterclone.jpg",
      link: "https://twitter-clone-ten-peach-69.vercel.app/",
    },
    {
      title: "ThinkBoard Notes App",
      description:
        "Collaborative whiteboard with MERN stack. Users draw, type, and collaborate in real time.",
      technologies: ["MERN Stack", "Socket.IO", "Tailwind CSS"],
      image: "ThinkBoard.jpg",
      link: "https://mern-thinkboard-ql79.onrender.com/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce site with PayPal integration, Redux store, and responsive design using shadcn/ui.",
      technologies: ["MERN Stack", "Redux", "PayPal", "shadcn/ui"],
      image: "ecommerce.png",
      link: "https://e-commerce-plateform.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#0d1117] to-[#151A25] text-white font-['Poppins']"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
          ✨ Projects
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 6000 }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-md shadow-indigo-500/10 hover:shadow-purple-500/30 transition duration-300 hover:scale-[1.03] flex flex-col h-full group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-4 group-hover:shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top transition duration-300 group-hover:scale-105 rounded-xl"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#D1D5DB] mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#1f2937] to-[#2b3242] rounded-full text-xs font-medium text-white shadow-inner shadow-white/10 hover:scale-105 transition-transform"
                    >
                      {techIconMap[tech]}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Visit Link (if not in image) */}
                {!project.link?.includes("onrender") && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-pink-400 text-sm font-medium inline-flex items-center gap-1"
                  >
                    View Project <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
