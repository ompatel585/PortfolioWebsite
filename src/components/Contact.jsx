function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#0d1117] text-white font-['Poppins']"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-lg mx-auto bg-[#161b22] border border-white/10 p-10 rounded-2xl shadow-md hover:shadow-purple-500/20 transition duration-300">
          <div className="space-y-6">
            <div>
              <label
                className="block text-[#E4E6EB] font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 bg-[#1a2238] text-[#F0F4FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                className="block text-[#E4E6EB] font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 bg-[#1a2238] text-[#F0F4FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                className="block text-[#E4E6EB] font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-4 bg-[#1a2238] text-[#F0F4FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Your Message"
              ></textarea>
            </div>

            <a
              href="mailto:ompatel34003@gmail.com"
              className="block text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
