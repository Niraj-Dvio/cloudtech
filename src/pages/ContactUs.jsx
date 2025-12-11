import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader title="Get in Touch">
          <p className="text-lg text-white/70 ">
            Have a question or ready to start your cloud transformation? We'd
            love to hear from you.
          </p>
        </PageHeader>

        <div className="grid md:grid-cols-3 gap-8 mb-16 ">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 cursor-target">
            <Mail className="text-blue-400 mb-4" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-white/70">hello@cloudtech.com</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 cursor-target">
            <Phone className="text-blue-400 mb-4" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-white/70">+1 (555) 123-4567</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 cursor-target">
            <MapPin className="text-blue-400 mb-4" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-white/70">Global Presence</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 "
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
            />
          </div>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 mb-6"
            required
          >
            <option value="">Select Service Interest</option>
            <option value="digital-engineering">Digital Engineering</option>
            <option value="cloud-devops">Cloud & DevOps</option>
            <option value="data-ai">Data Analytics & AI</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="staffing">Staffing & Recruiting</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 mb-6"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-linear-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-600 transition-all duration-300 cursor-target"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
