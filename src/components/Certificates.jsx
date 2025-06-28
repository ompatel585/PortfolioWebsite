function Certificates() {
  const certificates = [
    {
      name: "TCS NQT IT",
      details: "Obtained 2114/3000 (70.47%)",
    },
    {
      name: "Node JS Certificate",
      details: "TOPS Technologies, Ahmedabad",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-24 bg-[#0d1117] text-white font-['Poppins']"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-white/10 rounded-xl p-6 shadow-md hover:shadow-purple-500/20 transition duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-[#C4B5FD] mb-2">
                {cert.name}
              </h3>
              <p className="text-[#E4E6EB] text-sm">{cert.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
