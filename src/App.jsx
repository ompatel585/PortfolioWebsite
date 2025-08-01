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


import React, { Suspense, lazy } from "react";
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

function LoadingScreen() {
  const tips = [
    "💡 Tip: Keep your components small and reusable.",
    "💻 Tip: Use lazy loading to improve performance — oh wait 😉",
    "🚀 Tip: Clean code is better than clever code.",
    "📦 Tip: Always version your API responses.",
    "🧠 Tip: Thinking twice before coding saves debugging thrice.",
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <img
        src="https://illustrations.popsy.co/blue/programming.svg"
        alt="Loading illustration"
        className="w-60 mb-6 animate-fade-in"
      />
      <FaSpinner className="animate-spin text-5xl text-indigo-600 mb-4" />
      <p className="text-xl font-semibold text-gray-700 mb-2">Loading Awesomeness...</p>
      <p className="text-md text-gray-500 italic">{randomTip}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
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
    </div>
  );
}

export default App;
