import { useEffect, useState, type ReactNode } from "react";

const WIDTH = 390;

/** Shows a 390px-wide screen inside a phone frame, scaled down on narrow viewports. */
export default function Phone({ height, children }: { height: number; children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fit = () => setScale(Math.min(1, (window.innerWidth - 40) / WIDTH));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div style={{ width: WIDTH * scale, height: height * scale }}>
      <div className="phone" style={{ height, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}
