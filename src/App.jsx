// import React, { Suspense, lazy } from "react";

// // Lazy-loaded components
// const Navbar = lazy(() => import("./components/Navbar.jsx"));
// const Hero = lazy(() => import("./components/Hero.jsx"));
// const About = lazy(() => import("./components/About.jsx"));
// const Skills = lazy(() => import("./components/Skills.jsx"));
// const Projects = lazy(() => import("./components/Projects.jsx"));
// const Education = lazy(() => import("./components/Education.jsx"));
// const Certificates = lazy(() => import("./components/Certificates.jsx"));
// const Contact = lazy(() => import("./components/Contact.jsx"));
// const Footer = lazy(() => import("./components/Footer.jsx"));

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
//         <Navbar />
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Education />
//         <Certificates />
//         <Contact />
//         <Footer />
//       </Suspense>
//     </div>
//   );
// }

// export default App;
import React, { Suspense, lazy, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Hero = lazy(() => import("./components/Hero.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
const Certificates = lazy(() => import("./components/Certificates.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

const tips = [
  "💡 Tip: Refactor often, commit early.",
  "🛠️ Tip: Avoid over-engineering.",
  "🚀 Tip: Ship first, optimize later.",
  "🧪 Tip: Write tests that matter.",
  "⚡ Tip: UI/UX is half the product."
];

function LoadingScreen() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500/30 to-purple-600/30 text-white backdrop-blur-xl px-4 animate-fade-in">
      <img
        src="https://undraw.dev_productivity_re_fylf.svg"
        alt="Loading..."
        className="w-52 mb-6 animate-bounce"
        loading="eager"
      />
      <FaSpinner className="animate-spin text-3xl text-white mb-3" />
      <p className="text-lg font-semibold">Loading your portfolio...</p>
      <p className="text-sm opacity-80 mt-1 italic">{tip}</p>
    </div>
  );
}

function DelayedRenderer({ children, delay = 2000 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`transition-opacity duration-1000 ${show ? "opacity-100" : "opacity-0"}`}>
      {show ? children : <LoadingScreen />}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen font-['Poppins'] bg-[#0d1117] text-white">
      <DelayedRenderer>
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certificates />
          <Contact />
          <Footer />
        </Suspense>
      </DelayedRenderer>
    </div>
  );
}

export default App;
