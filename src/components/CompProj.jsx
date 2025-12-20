import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const techIconMap = {
  "MERN Stack": (
    <div className="flex gap-1 items-center">
      <SiMongodb className="text-green-500 text-sm" />
      <SiExpress className="text-gray-300 text-sm" />
      <SiReact className="text-blue-400 text-sm" />
      <SiNodedotjs className="text-green-400 text-sm" />
    </div>
  ),
};

function CompProj() {
  const slides = [
    // SLIDE 0 – INTRO (SPECIAL LOOK)
    {
      type: "intro",
      title: "Cloud TV Builder – Company Project Overview",
      bullets: [
        "Cloud TV OS is a certified Smart TV operating system that brings licensed apps, FAST channels, voice control, and personalised recommendations into a single interface.",
        "Cloud TV Builder is the internal CMS I worked on, used by content and operations teams to control tiles, metadata, and layouts that appear on Cloud TV-powered televisions.",
        "This project showcases my work on performance, data modelling, and UX for managing 50k+ records at an industry scale.",
      ],
      technologies: ["MERN Stack"],
    },

    // SLIDE 1–4 – DETAIL SLIDES (NORMAL CARDS)
    {
      type: "detail",
      title: "Internal CMS for Smart TV OS",
      bullets: [
        "Internal web platform used by Cloud TV's content and operations teams to manage tiles, sources, preferences, and metadata for Smart TVs across multiple brands and languages.",
        "Built with the MERN stack and designed so non-technical users can control what appears on Cloud TV home screens and content rows.",
        "Acts as the central control panel for configuring layouts, languages, and catalog structure across devices.",
      ],
      technologies: ["MERN Stack"],
    },
    {
      type: "detail",
      title: "Handling 50k+ Records with Smart Pagination",
      bullets: [
        "Implemented server-side pagination to keep database queries efficient while serving more than 50k tile records.",
        "Used a window-based loading strategy so only the visible slice of data is fetched and rendered in the table.",
        "Gives an infinite-table experience without UI freezes, even when internal users jump across hundreds of pages.",
      ],
      technologies: ["MERN Stack"],
    },
    {
      type: "detail",
      title: "Advanced Filters and Connected Metadata Tables",
      bullets: [
        "Built advanced filters so content teams can slice data by language, source, genre, content type, directors, cast members, year, and other attributes.",
        "Connected Tiles with shared metadata tables in the Preferences section, keeping relationships between entities clean and reusable.",
        "A single update to a language, genre, or source automatically reflects across the entire catalog, reducing manual work and mistakes.",
      ],
      technologies: ["MERN Stack"],
    },
    {
      type: "detail",
      title: "On‑Demand Loading, Cached Previews & AWS S3",
      bullets: [
        "Optimized the Tiles workflow using on‑demand loading so the app only fetches data when it is actually needed.",
        "Added preview caching so when a user opens the same tile preview multiple times, it feels instant instead of hitting the backend again.",
        "Integrated AWS S3 as the primary storage for artwork and images, wiring upload flows and URLs so assets can be reused across tiles and screens.",
      ],
      technologies: ["MERN Stack"],
    },
  ];

  return (
    <section
      id="company-project"
      className="py-24 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] text-white font-['Poppins'] relative"
    >
      {/* subtle glow for section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl absolute -top-40 left-10" />
        <div className="w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl absolute bottom-0 right-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* label chip */}
        <div className="flex flex-col items-center mb-6">
          <span className="px-4 py-1 rounded-full text-xl tracking-widest uppercase bg-white/5 border border-pink-600/40 text-pink-400 font-extrabold ">
            Featured Company Project - Cloud TV
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-200 via-purple-400 to-pink-200 bg-clip-text text-transparent animate-pulse">
          Cloud TV Builder – Smart TV CMS
        </h2>

        <p className="max-w-3xl mx-auto text-center text-sm md:text-base text-slate-300 mb-12">
         Cloud TV OS is India’s homegrown, certified Smart TV operating system that powers 150+ TV brands and millions of devices with official OTT apps, free live channels, voice control, and a built‑in recommendation engine. Cloud TV Builder is the internal CMS I worked on that lets teams actually shape what tiles, layouts, and content show up on those screens at scale.
       </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, index) => {
            const isIntro = slide.type === "intro";

            return (
              <SwiperSlide key={index} className="pt-6 pb-6">
                <div
                  className={
                    (isIntro
                      ? "bg-gradient-to-br from-pink-600/20 via-purple-700/30 to-blue-700/20 border-pink-400/60 "
                      : "bg-[#0b1120] border-pink-500/30 ") +
                    "relative rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col h-[550px] hover:-translate-y-2 hover:shadow-pink-500/40"
                  }
                >
                  {/* top accent & intro badge */}
                  <div className="absolute inset-x-6 -top-1 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full" />

                 

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">
                    {slide.title}
                  </h3>

                  {/* Bullets */}
                  <ul className="text-[#E4E6EB] text-sm leading-relaxed mb-4 flex-grow list-disc list-inside space-y-2">
                    {slide.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default CompProj;
