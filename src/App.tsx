import { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Gallery from "./components/Gallery";
import Phone from "./components/Phone";
import { screens, type Screen } from "./screens";

function ScreenPage({ screen, index }: { screen: Screen; index: number }) {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  const prev = screens[(index - 1 + screens.length) % screens.length];
  const next = screens[(index + 1) % screens.length];
  const { Component } = screen;

  return (
    <div className="stage">
      <p className="caption">
        <strong>{screen.title}</strong> · tap buttons and links to move through the app
      </p>
      <nav className="toolbar" aria-label="Prototype">
        <Link to={`/${prev.path}`} aria-label={`Previous: ${prev.title}`}>←</Link>
        <Link to="/screens" className="primary">All screens</Link>
        <Link to={`/${next.path}`} aria-label={`Next: ${next.title}`}>→</Link>
      </nav>
      <Phone height={screen.height}>
        <Component />
      </Phone>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Main" replace />} />
      <Route path="/screens" element={<Gallery />} />
      {screens.map((s, i) => (
        <Route key={s.path} path={`/${s.path}`} element={<ScreenPage screen={s} index={i} />} />
      ))}
      <Route path="*" element={<Navigate to="/screens" replace />} />
    </Routes>
  );
}
