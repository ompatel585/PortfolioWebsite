// function About() {
//   return (
//     <section
//       id="about"
//       className="py-24 px-6 bg-[#0d1117] text-white font-['Poppins']"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//           About Me
//         </h2>

//         {/* Content */}
//         <div className="flex flex-col md:flex-row items-start gap-12">
//           {/* Description */}
//           <div className="md:w-2/3 text-base md:text-lg leading-relaxed text-neutral-100 space-y-5">
//             <p>
//               I am a{" "}
//               <strong className="text-blue-400">MERN Stack Developer</strong>{" "}
//               with solid experience building full-stack web applications.
//             </p>
//             <p>
//               I specialize in{" "}
//               <strong className="text-purple-400">
//                 JavaScript, MongoDB, Node.js, Express, React
//               </strong>{" "}
//               and love creating seamless, fast, and responsive user interfaces.
//             </p>
//             <p>
//               My work includes{" "}
//               <strong className="text-pink-400">
//                 designing REST APIs, integrating AWS services
//               </strong>{" "}
//               like S3, EC2, SNS, and implementing real-time functionality with
//               Socket.IO.
//             </p>
//             <p>
//               I focus on writing clean, efficient code that performs well at
//               scale and is easy to maintain — always keeping the user experience
//               in mind.
//             </p>
//           </div>

//           {/* Contact Card */}
//           <div className="md:w-1/3 w-full">
//             <div className="bg-[#161b22] border border-blue-500/20 rounded-xl p-6 shadow-lg hover:shadow-blue-400/20 transition duration-300">
//               <h3 className="text-2xl font-semibold text-white mb-6">
//                 Connect With Me
//               </h3>
//               <ul className="space-y-4 text-neutral-100 text-base">
//                 <li className="flex items-center gap-3">
//                   <i className="fas fa-envelope text-blue-400 text-lg"></i>
//                   ompatel34003@gmail.com
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <i className="fas fa-phone text-purple-400 text-lg"></i>
//                   +91 931-384-7328
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <i className="fab fa-github text-pink-400 text-lg"></i>
//                   <a
//                     href="https://github.com/ompatel585"
//                     className="hover:underline hover:text-white"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     github.com/ompatel585
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0d1117] text-white font-['Poppins'] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left: Description */}
          <div className="md:w-2/3 text-base md:text-lg leading-relaxed text-neutral-100 space-y-5">
            <p>
              👨‍💻 I am a{" "}
              <strong className="text-blue-400">MERN Stack Developer</strong>{" "}
              with solid experience building full-stack web applications.
            </p>
            <p>
              🚀 I specialize in{" "}
              <strong className="text-purple-400">
                JavaScript, MongoDB, Node.js, Express, React
              </strong>{" "}
              and love creating seamless, fast, and responsive user interfaces.
            </p>
            <p>
              ☁️ My work includes{" "}
              <strong className="text-pink-400">
                designing REST APIs, integrating AWS services
              </strong>{" "}
              like S3, EC2, SNS, and implementing real-time functionality with
              Socket.IO.
            </p>
            <p>
              🧠 I focus on writing clean, efficient code that performs well at
              scale and is easy to maintain — always keeping the user experience
              in mind.
            </p>
          </div>

          {/* Right: Profile & Contact Card */}
          <div className="md:w-1/3 w-full flex flex-col items-center text-center">
            <div className="relative w-36 h-36 mb-6">
              <img
                src="https://avatars.githubusercontent.com/u/98767642?v=4"
                alt="Om Patel"
                className="rounded-full w-full h-full object-cover border-4 border-blue-500 shadow-md shadow-blue-500/30"
              />
            </div>

            <div className="bg-[#161b22] backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl w-full hover:shadow-pink-500/20 transition duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <ul className="space-y-4 text-neutral-100 text-base">
                <li className="flex items-center gap-3 justify-center">
                  <FaEnvelope className="text-blue-400 text-lg" />
                  <span>ompatel34003@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <FaPhone className="text-purple-400 text-lg" />
                  <span>+91 931-384-7328</span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <FaGithub className="text-pink-400 text-lg" />
                  <a
                    href="https://github.com/ompatel585"
                    className="hover:underline hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/ompatel585
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

