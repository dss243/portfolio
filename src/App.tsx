import { useState, useEffect } from "react";
import hijabGirl from "./assets/profile-placeholder.jpg";
import mine from "./assets/mine.jpg";

const projects = [
  
{
  number: "01",
  title: "Raqib AI — Arabic & Algerian Hate Speech Detection",
  description:
    "An AI-powered Reddit moderation tool using fine-tuned DziriBERT to detect hate speech and classify Arabic and Algerian dialect content, with Reddit OAuth, speech recognition, and real-time comment analysis.",
  tags: ["DziriBERT", "NLP", "FastAPI", "React", "Reddit API"],
  color: "#fce7f3",



  },
 
{
  number: "02",
  title: "PhytoSpectra",
  description:
    "Precision agriculture system using hyperspectral imaging and deep learning to detect early water stress in potato crops and support irrigation decisions through crop segmentation and stress classification.",
  tags: ["ViT", "SegFormer", "Hyperspectral Imaging", "Computer Vision"],
  color: "#fdf2f8",
},
{
  number: "03",
  title: "Tomogrow",
  description:
    "Smart irrigation system for tomato crops that uses environmental and crop-related data with LSTM models to predict irrigation needs and estimate the appropriate amount of water required.",
  tags: ["LSTM", "Time Series", "Irrigation"],
  color: "#fff0f7",
},


  {
  number: "04",
  title: "Ussraty",
  description:
    "A RAG-based legal assistance system designed to help users access and understand information related to family law and the Family Chamber.",
  tags: ["RAG", "LLM", "Legal AI", "NLP", "langchain"],
  color: "#fff0f7",
},
 {
  number: "05",
  title: "Notre Crèche",
  description:
    "A full-stack web application connecting kindergartens and parents through personalized child access, teacher chat, GPS trip tracking, and digital medical records. It also provides visitors with kindergarten information, a 360° virtual tour, and contact details.",
  tags: ["React", "Spring Boot", "MySQL", "UX/UI"],
  color: "#fff0f7",
},
{
  number: "06",
  title: "Sawtna",
  description:
    "An AI-powered mobile app that analyzes text and images for content risks, then uses computer vision and NLP to transform sensitive content while preserving its original message.",
  tags: ["Flutter", "PyTorch", "FastAPI", "ViT", "SAM", "NLP"],
  color: "#f5f5f5",
},
  
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(253,252,251,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #fce7f3" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#e8498a" }}
          >
            SB.
          </button>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: activeSection === l.id ? "#e8498a" : "#1a1028",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "#fe72ac", color: "#fff" }}
            >
              Hire Me
            </button>
          </div>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#e8498a",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#e8498a",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#e8498a",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "",
              }}
            />
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{ background: "rgba(253,252,251,0.97)" }}
          >
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-base font-medium text-left"
                style={{ color: "#1a1028" }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, #fce7f3 0%, #fdf2f8 40%, #fdfcfb 100%)",
        }}
      >
        {/* decorative blobs */}
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ background: "#f9a8d4" }}
        />
        <div
          className="absolute bottom-10 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "#e8498a" }}
        />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-12 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <div className="order-2 md:order-1">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#e8498a" }}
            >
              AI / Software Engineer
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "#1a1028" }}
            >
              Soundous
              <br />
              <span style={{ color: "#e8498a" }}>Benzagouta</span>
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-md"
              style={{ color: "#6b4f7a" }}
            >
              I build intelligent applications using machine learning and modern
              web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "#e8498a",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(232,73,138,0.3)",
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="px-7 py-3.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: "#e8498a", color: "#e8498a" }}
              >
                About Me
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full opacity-30 blur-2xl scale-110"
                style={{ background: "#f9a8d4" }}
              />
              <img
                src={hijabGirl}
                alt="Soundous — a waving hijabi girl illustration"
                className="girl-wave relative w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-xl"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#9b7aa0" }}>
            Scroll
          </span>
          <div className="w-px h-8 animate-pulse" style={{ background: "#e8498a" }} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6" style={{ background: "#fdfcfb" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#e8498a" }}
            >
              Selected Work
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "#1a1028" }}
            >
              Projects
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-8 md:p-10 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
                style={{
                  background: p.color,
                  borderColor: "#fce7f3",
                }}
              >
                <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
                  <span
                    className="text-5xl font-bold opacity-20 select-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#e8498a",
                    }}
                  >
                    {p.number}
                  </span>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "#1a1028" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed mb-5 max-w-2xl"
                      style={{ color: "#6b4f7a" }}
                    >
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full"
                          style={{ background: "#fff", color: "#e8498a", border: "1px solid #f9a8d4" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
{/* ABOUT */}
<section
  id="about"
  className="py-28 px-6"
  style={{
    background: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%)",
  }}
>
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <p
        className="text-sm font-semibold uppercase tracking-widest mb-3"
        style={{ color: "#e8498a" }}
      >
        Get to know me
      </p>

      <h2
        className="text-4xl md:text-5xl"
        style={{
          fontFamily: "var(--font-display)",
          color: "#1a1028",
        }}
      >
        About
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Photo */}
      <div className="flex justify-center">
        <div className="relative">
        

          {/* Decorative dot */}
          <div
            className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full"
            style={{
              background: "#e8498a",
              opacity: 0.15,
            }}
          />
        </div>
      </div>

      {/* Bio */}
      <div>
        <h3
          className="text-3xl mb-6"
          style={{
            fontFamily: "var(--font-display)",
            color: "#1a1028",
          }}
        >
          Soundous Benzagouta
        </h3>

        <p
          className="text-base leading-relaxed mb-5"
          style={{ color: "#6b4f7a" }}
        >
          I'm an AI / Software Engineer passionate about building
          intelligent systems that make a real-world impact. My work
          spans natural language processing, computer vision, and
          full-stack development.
        </p>

        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: "#6b4f7a" }}
        >
          I enjoy turning complex machine learning models into polished,
          production-ready applications from transformer-powered APIs
          to interactive web experiences.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "Machine Learning",
            "NLP",
            "Computer Vision",
            "FastAPI",
            "React",
            "PyTorch",
            "Transformers",
            "Python",
          ].map((skill) => (
            <span
              key={skill}
              className="text-sm font-medium px-4 py-2 rounded-full"
              style={{
                background: "#fff",
                color: "#e8498a",
                border: "1px solid #f9a8d4",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="py-28 px-6" style={{ background: "#fdfcfb" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#e8498a" }}
          >
            Let's talk
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "var(--font-display)", color: "#1a1028" }}
          >
            Get in Touch
          </h2>
          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: "#6b4f7a" }}>
            I'm open to new opportunities, collaborations, and interesting conversations. Feel
            free to reach out — I'd love to hear from you.
          </p>

          <form
            className="text-left rounded-3xl p-8 md:p-12 border flex flex-col gap-5"
            style={{ background: "#fff", borderColor: "#fce7f3" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" style={{ color: "#1a1028" }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-pink-400"
                  style={{
                    borderColor: "#fce7f3",
                    background: "#fdf2f8",
                    color: "#1a1028",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" style={{ color: "#1a1028" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-pink-400"
                  style={{
                    borderColor: "#fce7f3",
                    background: "#fdf2f8",
                    color: "#1a1028",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold" style={{ color: "#1a1028" }}>
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-all duration-200 focus:border-pink-400"
                style={{
                  borderColor: "#fce7f3",
                  background: "#fdf2f8",
                  color: "#1a1028",
                }}
              />
            </div>
            <button
              type="submit"
              className="self-start px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "#e8498a",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(232,73,138,0.3)",
              }}
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            {["GitHub", "LinkedIn", "Email"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: "#e8498a" }}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center border-t"
        style={{ borderColor: "#fce7f3", background: "#fdfcfb" }}
      >
        <p className="text-sm" style={{ color: "#9b7aa0" }}>
          © 2026 Soundous Benzagouta — Built with{" "}
          <span style={{ color: "#e8498a" }}>♥</span>
        </p>
      </footer>
    </div>
  );
}
