import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="site-title">
        <p className="eyebrow">Remote 1:1 coaching</p>
        <h1 id="site-title">Pernille Performance</h1>
        <p className="lead">
          Elite 1:1 performance coaching for ambitious women in sport, business,
          and life.
        </p>
        <p className="standard">
          Train your standard. Build your edge. Perform with clarity.
        </p>
        <a className="cta" href="mailto:hello@pernilleperformance.com">
          Apply for coaching
        </a>
        <p className="subtext">
          Remote coaching for women ready to raise their level in body, mindset,
          leadership, and execution.
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
