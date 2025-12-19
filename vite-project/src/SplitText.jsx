import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 0.05,
  duration = 0.8,
  tag = "h1",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const chars = ref.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        stagger: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`block whitespace-pre-wrap ${className}`}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
