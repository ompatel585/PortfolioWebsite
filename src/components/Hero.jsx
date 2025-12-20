import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-greet", { y: 30, opacity: 0, duration: 0.6 })
        .from(".hero-name", { y: 50, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-social", { y: 20, opacity: 0, stagger: 0.15 }, "-=0.2")
        .from(".hero-cta", { scale: 0.9, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero-img", { scale: 0.85, opacity: 0, duration: 0.8 }, "-=0.4");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-[#0a0a14] to-[#1a1a2f] text-white font-['Poppins']"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="hero-greet text-lg md:text-2xl text-[#E4E6EB] font-light mb-3 tracking-wide">
            Hello, I’m
          </h2>

          <h1 className="hero-name text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-5 leading-tight">
            Om Patel
          </h1>

          <p className="hero-desc text-base sm:text-lg md:text-xl text-[#C5C7D0] mb-10 leading-relaxed max-w-xl mx-auto md:mx-0 tracking-wide">
            I build modern, scalable web apps — blending elegant UI with
            powerful backend logic.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mb-10">
            <a
              href="https://www.linkedin.com/in/aum-patel-711b591b8/"
              target="_blank"
              className="hero-social text-[#E4E6EB] hover:text-blue-500 transition-colors duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ompatel585/"
              target="_blank"
              className="hero-social text-[#E4E6EB] hover:text-purple-400 transition-colors duration-300 text-3xl"
            >
              <FaGithub />
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hero-cta inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/ProfessionalImage.jpg"
            alt="Om Patel"
            className="hero-img w-48 sm:w-64 md:w-80 mx-auto rounded-full border-4 border-purple-500/50 shadow-lg shadow-purple-500/10"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
