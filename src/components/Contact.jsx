// Contact.jsx

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_m0vefh5", // your Service ID
        "template_cxqgw6r", // your Template ID
        formRef.current,
        "b2R80Gqz_3KlVGcMN" // <-- put your real Public Key here
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

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
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                name="user_name"
                required
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
                name="user_email"
                required
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
                name="message"
                rows="6"
                required
                className="w-full p-4 bg-[#1a2238] text-[#F0F4FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 transition-transform shadow-lg"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center mt-2">
                Message sent successfully. Check your inbox.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-2">
                Something went wrong. Double-check IDs / public key.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
