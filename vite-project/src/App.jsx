import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import myPhoto from "./assets/myPhoto.png";
import log from "./assets/log.png";
import Works from "./Works";
import Resume from "./Resume";
import "./App.css";

const SplitText = ({
  text,
  className = "",
  delay = 0.05,
  duration = 0.8,
  tag = "h1",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Tag = tag;

  return (
    <Tag ref={ref} className={`block whitespace-pre-wrap ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            filter: isVisible ? "blur(0px)" : "blur(10px)",
            transitionDuration: `${duration}s`,
            transitionDelay: `${i * delay}s`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const ScaleIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-1200"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "scale(1) rotate(0deg)"
          : "scale(0.8) rotate(-5deg)",
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
};

function Home() {
  return (
    <div className="flex justify-center">
      <section className="w-5/6 min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <FadeIn delay={0.3}>
            <div className="inline-block bg-gray-800 text-lg text-white px-3 py-1">
              It's me
            </div>
          </FadeIn>

          <SplitText
            text="Prasanna"
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
            delay={0.03}
            duration={0.6}
          />
          <SplitText
            text="Venketesh"
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
            delay={0.03}
            duration={0.6}
          />

          <FadeIn delay={0.8}>
            <h2 className="text-sm font-semibold uppercase text-gray-500">
              Software Developer
            </h2>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="text-gray-600 max-w-md text-lg">
              Developer focused on building clean, scalable web applications
              using modern technologies. Passionate about frontend systems and
              thoughtful UI engineering.
            </p>
          </FadeIn>

          <FadeIn delay={1.2}>
            <button className="bg-red-400 text-white px-7 py-3 rounded-full text-sm hover:bg-red-500 transition">
              Let's talk
            </button>
          </FadeIn>
        </div>

        <div className="flex justify-center">
          <ScaleIn delay={0.5}>
            <div className="h-[380px] w-[380px] md:h-[450px] md:w-[450px] lg:h-[520px] lg:w-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-red-200 to-red-300 shadow-2xl">
              <img
                src={myPhoto}
                alt="Prasanna"
                className="h-full w-full object-cover"
              />
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="py-4 flex justify-between items-center px-4 bg-red-50/80 backdrop-blur border-b-indigo-500">
        <FadeIn>
          <Link to="/">
            <img src={log} alt="Logo" className="size-12 cursor-pointer" />
          </Link>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex gap-8 text-md font-medium mr-12">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <Link to="/works" className="hover:text-black transition">
              Works
            </Link>
            
            <Link to="/Resume" className="hover:text-black transition">
              Resume
            </Link>
            <span className="hover:text-black transition cursor-pointer">
              Self
            </span>
          </div>
        </FadeIn>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
