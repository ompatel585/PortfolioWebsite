import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });

  return (
    <footer className="w-full bg-[#0d1117] text-center font-['Poppins'] border-t border-white/10 py-6 fixed bottom-0 left-0 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-4">
        <p className="text-[#E4E6EB] text-sm tracking-wide">
          &copy; {year} {month}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold">
            Om Patel
          </span>
          . All rights reserved.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/ompatel585"
            target="_blank"
            className="text-[#E4E6EB] hover:text-purple-400 text-xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ompatel585"
            target="_blank"
            className="text-[#E4E6EB] hover:text-purple-400 text-xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ompatel34003@gmail.com"
            className="text-[#E4E6EB] hover:text-purple-400 text-xl transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
