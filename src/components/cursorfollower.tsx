import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const DOT_SIZE = 6;
    const CIRCLE_SIZE = 24; // 20px + 2px border * 2

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${centerX - DOT_SIZE / 2}px, ${centerY - DOT_SIZE / 2}px)`;
    }
    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${centerX - CIRCLE_SIZE / 2}px, ${centerY - CIRCLE_SIZE / 2}px)`;
    }

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // dot (instant)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX - DOT_SIZE / 2}px, ${clientY - DOT_SIZE / 2}px)`;
      }

      // circle (smooth follow)
      if (circleRef.current) {
        circleRef.current.animate(
          {
            transform: `translate(${clientX - CIRCLE_SIZE / 2}px, ${clientY - CIRCLE_SIZE / 2}px)`,
          },
          {
            duration: 300,
            fill: "forwards",
            easing: "ease-out",
          }
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Center Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          background: "white",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* Outer Circle */}
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          border: "2px solid white",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}