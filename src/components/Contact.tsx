import React, { useState } from "react";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone, FiSend } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Socials from "./Socials";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill all fields before sending.");
      return;
    }

    setError("");
    alert("Message sent successfully!");

    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0c1c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#9a2b2b] mb-12 border-t-4 border-l-4 border-blue-500 inline-block p-2">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-[#1a1b2c] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="bg-[#0b0c1c] p-3 rounded outline-none w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-[#0b0c1c] p-3 rounded outline-none w-full"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-[#0b0c1c] p-3 rounded outline-none w-full"
              />

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="bg-[#0b0c1c] p-3 rounded outline-none w-full"
              ></textarea>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 border border-[#9a2b2b] text-[#9a2b2b] py-3 rounded hover:bg-[#9a2b2b] hover:text-white transition"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Get in Touch</h3>

            <div className="flex items-center gap-4">
              <div className="bg-[#1a1b2c] p-3 rounded-full">
                <MdEmail className="text-[#9a2b2b]" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p>jeenashrestha04@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#1a1b2c] p-3 rounded-full">
                <MdLocationOn className="text-[#9a2b2b]" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p>Lalitpur, Nepal</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#1a1b2c] p-3 rounded-full">
                <FiPhone className="text-[#9a2b2b]" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p>+977 9761684581</p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-gray-400">Connect with Me</p>
              <Socials />
            </div>

            <div className="bg-[#1a1b2c] p-5 rounded-lg border border-gray-700 flex items-start gap-3">
              <AiOutlineCheckCircle className="text-[#9a2b2b] mt-1" size={22} />
              <div>
                <p className="font-semibold mb-1">Availability</p>
                <p className="text-gray-400 text-sm">
                  I respond within 24 hours. Open to freelance and
                  collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
