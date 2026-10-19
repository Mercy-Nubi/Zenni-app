import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { screens, type Screen } from "../screens";

function Thumb({ screen }: { screen: Screen }) {
  const box = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    // Previews are pictures only: keep their links out of the tab order.
    inner.current?.setAttribute("inert", "");
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / 390));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { Component } = screen;
  return (
    <div className="thumb" ref={box}>
      <div ref={inner} style={{ transform: `scale(${scale})` }} aria-hidden="true">
        <Component />
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <main className="gallery">
      <h1>Zenni app redesign</h1>
      <p className="lede">
        {screens.length} screens covering browsing, product details, the lens builder, cart, checkout, account and virtual
        try-on. Tap any screen to open the clickable prototype.
      </p>
      <div className="grid">
        {screens.map((s) => (
          <div key={s.path} className="card">
            <Thumb screen={s} />
            <Link to={`/${s.path}`} className="card-link">
              {s.title}
            </Link>
          </div>
        ))}
      </div>
      <p className="note">
        Unofficial redesign concept by Mercy Nubi for portfolio use. The Zenni name, products and photography belong to Zenni
        Optical. Values in [brackets] are placeholders.
      </p>
    </main>
  );
}
