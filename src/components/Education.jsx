function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institute: "LDRP Institute of Technology and Research, KSV University",
      duration: "2020 - 2024",
    },
    {
      degree: "H.S.C Board",
      institute: "KTKM School, Kalol, GHSEB Board",
      duration: "2018 - 2020",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-[#0d1117] text-white font-['Poppins']"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-white/10 rounded-xl p-6 shadow-md hover:shadow-purple-500/20 transition duration-300 hover:scale-[1.02] flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#C4B5FD]">
                  {edu.degree}
                </h3>
                <p className="text-[#E4E6EB] mt-1 text-sm">{edu.institute}</p>
              </div>
              <p className="text-sm text-[#E4E6EB] mt-4 md:mt-0 font-medium">
                {edu.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
