import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
  };

  return (
    <>
      <Navbar />

      <div>

        {/* MAIN SECTION */}
        <section
          className="flex flex-wrap px-6 lg:px-24 py-24 gap-16 items-center bg-gray-50"
        >
          {/* LEFT SIDE INFO */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-3xl mb-5 font-semibold">
              Get in Touch
            </h2>

            <p
              className="text-base leading-relaxed text-gray-600 text-justify max-w-[500px]"
            >
              Whether you have questions about destinations, bookings, or custom
              travel plans, our team is ready to help. Reach out to us and we will
              ensure a smooth and hassle-free experience for your journey.
            </p>

            {/* OPTIONAL IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c"
              alt=""
              className="mt-8 w-full max-w-[400px] rounded-xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="flex-1 min-w-[320px] bg-white p-10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[18px]"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="p-3 rounded-md border border-gray-300 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-3 rounded-md border border-gray-300 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="p-3 rounded-md border border-gray-300 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="p-3 rounded-md border border-gray-300 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />

              <button
                type="submit"
                className="py-4 bg-blue-500 text-white rounded-md cursor-pointer text-sm transition hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}