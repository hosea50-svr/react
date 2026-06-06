import { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";
import Header from "../components/Header";
const API_URL = import.meta.env.VITE_API_URL;

export default function ContactPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.message || "Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.log(error);
      setStatus("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="container p-3">
        <div className="contact-wrapper">
          <div className="contact-box">
            <h3 className="text-secondary">Contact Us</h3>

            <p>Send us a message and we will get back to you.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-primary"
              >
                Back
              </button>
            </form>

            {status && <p className="status">{status}</p>}
          </div>
        </div>

        <div className="map-container mt-4">
          <iframe
            title="Abuja Map"
            src="https://www.google.com/maps?q=Abuja,Nigeria&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <Footer />
      </div>
    </>
  );
}
