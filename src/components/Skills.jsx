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

function Skills() {
  const skills = [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-400 text-3xl" />,
      color: "text-green-400",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-3xl" />,
      color: "text-green-500",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300 text-3xl" />,
      color: "text-gray-300",
    },
    {
      name: "React.js",
      icon: <SiReact className="text-blue-400 text-3xl" />,
      color: "text-blue-400",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      color: "text-yellow-400",
    },
    {
      name: "AWS (S3, EC2, IAM, SNS)",
      icon: <FaAws className="text-orange-400 text-3xl" />,
      color: "text-orange-400",
    },
    {
      name: "Socket.IO",
      icon: <SiSocketdotio className="text-white text-3xl" />,
      color: "text-white",
    },
    {
      name: "JWT Auth",
      icon: <SiJsonwebtokens className="text-pink-400 text-3xl" />,
      color: "text-pink-400",
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-300 text-3xl" />,
      color: "text-orange-300",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-300 text-3xl" />,
      color: "text-teal-300",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#0d1117] text-white font-['Poppins']"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-white/10 rounded-lg p-6 text-center shadow-md hover:shadow-blue-500/20 transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-3">{skill.icon}</div>
              <p className={`font-semibold ${skill.color}`}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
