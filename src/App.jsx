
// import React, { Suspense, lazy, useState, useEffect } from "react";
// import { FaSpinner } from "react-icons/fa";

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

// // Fake loading screen
// function LoadingScreen() {
//   const tips = [
//     "💡 Tip: Refactor often, commit early.",
//     "🛠️ Tip: Avoid over-engineering.",
//     "🚀 Tip: Ship first, optimize later.",
//     "🧪 Tip: Write tests that matter.",
//     "⚡ Tip: UI/UX is half the product."
//   ];
//   const tip = tips[Math.floor(Math.random() * tips.length)];

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-center px-4">
//       <img
//         src="https://undraw.dev_productivity_re_fylf.svg"
//         alt="Loading illustration"
//         className="w-60 mb-6 animate-fade-in"
//         loading="eager"
//       />
//       <FaSpinner className="animate-spin text-4xl text-indigo-600 mb-3" />
//       <p className="text-xl font-semibold text-gray-700">Preparing something awesome...</p>
//       <p className="text-md text-gray-500 italic mt-2">{tip}</p>
//     </div>
//   );
// }


// // Ensures content waits at least 3s before showing
// function DelayedRenderer({ children, delay = 3000 }) {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShow(true), delay);
//     return () => clearTimeout(timeout);
//   }, [delay]);

//   return show ? children : <LoadingScreen />;
// }

// function App() {
//   return (
//     <div className="min-h-screen">
//       <DelayedRenderer>
//         <Suspense fallback={<LoadingScreen />}>
//           <Navbar />
//           <Hero />
//           <About />
//           <Skills />
//           <Projects />
//           <Education />
//           <Certificates />
//           <Contact />
//           <Footer />
//         </Suspense>
//       </DelayedRenderer>
//     </div>
//   );
// }

// export default App;


import React, { Suspense, lazy, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

// Lazy-loaded components
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Hero = lazy(() => import("./components/Hero.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
const Certificates = lazy(() => import("./components/Certificates.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

// Fake loading screen
function LoadingScreen() {
  const tips = [
    "💡 Refactor often, commit early.",
    "🛠️ Avoid over-engineering.",
    "🚀 Ship first, optimize later.",
    "🧪 Write tests that matter.",
    "⚡ UI/UX is half the product.",
  ];
  const tip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-center px-6 text-white relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 to-transparent animate-pulse blur-3xl"></div>

      {/* Illustration */}
      <img
        src="https://undraw.dev_productivity_re_fylf.svg"
        alt="Loading..."
        className="w-48 md:w-60 mb-6 z-10 animate-fade-in-up"
        loading="eager"
      />

      {/* Spinner */}
      <FaSpinner className="animate-spin text-4xl text-indigo-300 mb-4 z-10" />

      {/* Messages */}
      <p className="text-lg md:text-xl font-semibold z-10">Hang tight, good things take time 🚀</p>
      <p className="text-sm text-gray-300 italic mt-2 z-10">{tip}</p>
    </div>
  );
}


// Ensures content waits at least 3s before showing
function DelayedRenderer({ children, delay = 3000 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return show ? children : <LoadingScreen />;
}

function App() {
  return (
    <div className="min-h-screen">
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

