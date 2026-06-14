import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const applicationLink =
  "https://wa.me/541126845921?text=Hi%20Pernille%2C%20I%27m%20interested%20in%201%3A1%20performance%20coaching.";

const pillars = [
  {
    number: "01",
    title: "Clarity",
    copy: "Know what matters, what moves the needle, and what needs to stop draining energy.",
  },
  {
    number: "02",
    title: "Discipline",
    copy: "Create standards you can live by in training, work, recovery, and decision-making.",
  },
  {
    number: "03",
    title: "Execution",
    copy: "Move with focus. Follow through under pressure. Build proof through action.",
  },
];

const results = [
  "Stronger routines",
  "Sharper focus",
  "Better emotional control under pressure",
  "Higher standards around training and recovery",
  "Cleaner decision-making",
  "More consistent execution",
  "A stronger sense of personal authority",
];

const fitSignals = [
  "You want direct 1:1 coaching",
  "You are ready to be challenged",
  "You care about performance in more than one area of life",
  "You want structure, accountability, and clear standards",
  "You are done negotiating with the version of you that keeps playing small",
];

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pernille Performance home">
          Pernille Performance
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#method">Method</a>
          <a href="#results">Results</a>
          <a href="#who">For</a>
          <a href="#apply">Apply</a>
        </nav>
        <a className="nav-cta" href={applicationLink}>
          Level Up
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-reveal">1:1 High-Performance Coaching</p>
            <h1 className="hero-reveal" id="hero-title">
              Elite performance coaching for women already in motion.
            </h1>
            <p className="hero-lead hero-reveal">
              1:1 coaching for ambitious women in sport, business, and life,
              built around clarity, discipline, strength, and execution.
            </p>
            <div className="hero-actions hero-reveal">
              <a className="button button-primary" href={applicationLink}>
                Level Up
              </a>
            </div>
            <p className="hero-microcopy hero-reveal">
              <span>Remote coaching</span>
              <span>Personal standards</span>
              <span>Serious women only</span>
            </p>
          </div>
          <figure className="hero-media hero-reveal">
            <img
              src="/images/hero-4-good.png"
              alt="Pernille in a focused performance coaching portrait"
              width="6144"
              height="8192"
              fetchPriority="high"
            />
          </figure>
        </section>

        <section
          className="section method-section"
          id="method"
          aria-labelledby="method-title"
          data-reveal
        >
          <div className="section-heading">
            <p className="section-kicker">Method</p>
            <h2 id="method-title">Performance is trained.</h2>
            <p>
              The work is personal, precise, and practical — built around the
              standards that support high-level output.
            </p>
          </div>
          <div className="method-principles">
            {pillars.map((pillar) => (
              <article className="method-principle" key={pillar.title}>
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section section-dark"
          id="results"
          aria-labelledby="results-title"
          data-reveal
        >
          <div className="section-heading">
            <p className="section-kicker">Results</p>
            <h2 id="results-title">Built for real performance.</h2>
            <p>
              This is coaching for women who want measurable change in how they
              operate.
            </p>
          </div>
          <ul className="result-grid">
            {results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </section>

        <section
          className="section split"
          id="who"
          aria-labelledby="who-title"
          data-reveal
        >
          <div className="section-heading">
            <p className="section-kicker">Who It&apos;s For</p>
            <h2 id="who-title">For women who are already in motion.</h2>
            <p>
              This is for athletes, founders, leaders, creatives, and
              high-achieving women who are ready to be coached directly.
            </p>
            <p>
              You may be building a business, competing in sport, leading a
              team, returning to your body, or preparing for your next level.
              The work starts where you are and raises the standard from there.
            </p>
          </div>
          <div className="fit-panel">
            <span>This is for you if</span>
            <ul>
              {fitSignals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section about" aria-labelledby="about-title" data-reveal>
          <div>
            <p className="section-kicker">Coach</p>
            <h2 id="about-title">Coached by Pernille.</h2>
          </div>
          <p>
            Pernille works with ambitious women worldwide through remote 1:1
            coaching. Her approach blends performance, discipline, personal
            development, and practical execution for women who want to operate
            at a higher level.
          </p>
          <p className="about-note">Danish by background. Global by practice.</p>
        </section>

        <section className="apply" id="apply" aria-labelledby="apply-title" data-reveal>
          <p className="section-kicker">Apply</p>
          <h2 id="apply-title">Ready to level up?</h2>
          <p>
            If you are serious about raising your standard, apply for 1:1
            coaching.
          </p>
          <a className="button button-primary" href={applicationLink}>
            Apply for Coaching
          </a>
          <span>Limited remote coaching spots available.</span>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Pernille Performance</strong>
          <p>Elite 1:1 coaching for women in sport, business, and life.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#method">Method</a>
          <a href="#results">Results</a>
          <a href="#who">Who It&apos;s For</a>
          <a href="#apply">Apply</a>
        </nav>
        <p>© 2026 Pernille Performance. All rights reserved.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
