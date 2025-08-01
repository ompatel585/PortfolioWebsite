


import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-[#0a0a14] to-[#1a1a2f] text-white font-['Poppins'] overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[150px] z-0 animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] z-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-lg md:text-2xl text-gray-900 font-light tracking-wide animate-fade-in">
            👋 Hello, I’m
          </h2>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight animate-slide-in-up">
            Om Patel
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed tracking-wide max-w-xl mx-auto md:mx-0 animate-fade-in">
            I build modern, scalable web apps — blending elegant UI with
            powerful backend logic.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 animate-fade-in">
            <a
              href="https://www.linkedin.com/in/aum-patel-711b591b8/"
              target="_blank"
              rel="noreferrer"
              className="text-[#E4E6EB] hover:text-blue-500 transition-colors duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ompatel585/"
              target="_blank"
              rel="noreferrer"
              className="text-[#E4E6EB] hover:text-purple-400 transition-colors duration-300 text-3xl"
            >
              <FaGithub />
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-transform duration-300"
            >
              📬 Get In Touch
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 animate-fade-in-up flex justify-center">
          <div className="relative">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 blur-xl scale-110 z-0 animate-spin-slow"></div>
            <img
              src="/ProfessionalImage.jpg"
              alt="Om Patel"
              className="relative z-10 w-48 sm:w-64 md:w-80 rounded-full border-4 border-purple-500/50 shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

