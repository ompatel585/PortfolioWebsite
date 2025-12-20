import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiReact,
  SiJavascript,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const skills = [
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "React.js", icon: <SiReact />, color: "text-blue-400" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    {
      name: "AWS (S3, EC2, IAM, SNS)",
      icon: <FaAws />,
      color: "text-orange-400",
    },
    { name: "Socket.IO", icon: <SiSocketdotio />, color: "text-white" },
    { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "text-pink-400" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-300" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-300" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        scale: 0.6,
        y: 60,
        stagger: {
          grid: [3, 4],
          from: "center",
          amount: 0.8,
        },
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt effect
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.08,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const resetCard = (index) => {
    gsap.to(cardsRef.current[index], {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-28 bg-[#0d1117] text-white font-['Poppins']"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 perspective-[1000px]">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => resetCard(index)}
              className="relative bg-[#161b22] border border-white/10 rounded-xl p-7 text-center
                         transform-gpu transition-shadow duration-300
                         hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.4)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className={`text-4xl mb-4 ${skill.color}`}>{skill.icon}</div>
              <p className={`font-semibold ${skill.color}`}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
