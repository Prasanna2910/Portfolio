import { useEffect, useRef, useState } from "react";
import myPhoto from "./assets/myPhoto.png";
import log from "./assets/log.png";

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const Tag = tag;

  return (
    <Tag ref={ref} className={`block whitespace-pre-wrap ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char inline-block transition-all"
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

    if (ref.current) {
      observer.observe(ref.current);
    }

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-1200"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(-5deg)",
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="py-4 flex justify-between items-center max-w-7xl mx-auto px-4">
        <FadeIn delay={0}>
          <div className="flex items-center">
            <img src={log} alt="" className="size-12"/>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex gap-8 text-md font-medium">
            <span className="cursor-pointer hover:text-black transition">
              Works
            </span>
            <span className="cursor-pointer hover:text-black transition">
              Resume
            </span>
            <span className="cursor-pointer hover:text-black transition">
              Shelf
            </span>
          </div>
        </FadeIn>
      </nav>

      <div className="flex justify-center">
        <section className="w-5/6 mt-auto min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <FadeIn delay={0.3}>
              <div className="inline-block bg-gray-800 text-lg text-white px-3 py-1">
                It's me
              </div>
            </FadeIn>

            <SplitText
              text="Prasanna"
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              delay={0.03}
              duration={0.6}
            />
            <SplitText
              text="Venketesh"
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              delay={0.03}
              duration={0.6}
            />

            <FadeIn delay={0.8}>
              <h2 className="text-sm font-semibold tracking-wide uppercase text-gray-500 pt-2">
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
              <button className="bg-red-400 text-white px-7 py-3 rounded-full text-sm hover:bg-red-500 transition mt-4">
                Let's talk
              </button>
            </FadeIn>
          </div>

          <div className="flex justify-center">
            <ScaleIn delay={0.5}>
              <div className="h-[380px] w-[380px] md:h-[450px] md:w-[450px] lg:h-[520px] lg:w-[520px] overflow-hidden rounded-2xl bg-gradient-to-br from-red-200 to-red-300 shadow-2xl">
                <div className="h-full w-full flex items-center justify-center text-6xl">
                  <img src={myPhoto} alt="Prasanna Venketesh" />
                </div>
              </div>
            </ScaleIn>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;