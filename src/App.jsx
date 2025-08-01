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

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <FaSpinner className="animate-spin text-4xl text-blue-600" />
      <p className="text-lg font-medium text-gray-600">Loading components...</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
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
