import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const applicationLink =
  "https://wa.me/541126845921?text=Hi%20Pernille%2C%20I%27m%20interested%20in%201%3A1%20performance%20coaching.";

const pillars = [
  {
    number: "1",
    title: "Clarity",
    copy: "Know what matters, what moves the needle, and what needs to stop draining energy.",
  },
  {
    number: "2",
    title: "Discipline",
    copy: "Create standards you can live by in training, work, recovery, and decision-making.",
  },
  {
    number: "3",
    title: "Execution",
    copy: "Move with focus. Follow through under pressure. Build proof through action.",
  },
];

const fitSignals = [
  "You want direct 1:1 coaching",
  "You are ready to be challenged",
  "You care about performance in more than one area of life",
  "You want structure, accountability, and clear standards",
  "You are done negotiating with the version of you that keeps playing small",
];

const testimonials = [
  {
    name: "Anna",
    location: "United States",
    copy: "Working with Pernille has been such a great experienice! Every session with her is such an eye opener. She makes me feel understood and motivated! She is kind, authentic, and inspires me to go after what I want in life. Getting to work with her has helped me follow my passions and shown me that if I work hard and believe in myself, I can do anything I put my mind to. She not only makes me feel heard and understood, but she also works hard herself, too. Pernille is the most inspiring person I have met! I definitely recommend working with her if you get the chance!",
  },
  {
    name: "Phyllis",
    location: "Kenya",
    copy: "Before our sessions I felt stuck in my own head and unsure of how to move forward. I could think things through on my own, but I kept going in circles. Working with her helped me slow down and see things differently. I started to notice patterns in how I think and react that I hadn't fully seen before. What changed for me is that I now feel more confident and sure of myself. I trust my decisions more, instead of second-guessing everything. It feels like I'm no longer fighting myself all the time. If you're looking for a coach to help you get unstuck, Pernille is someone I absolutely recommend.",
  },
  {
    name: "Hazal",
    location: "Turkey",
    copy: "First of all, thank you for everything, every minutes that you spend for us, I want to thank you to create a safe zone for me. You listen me a lot, you understand what is my stuck point, you didn't just check my daily things but also you pointed out my feelings. So, the change was so deep. The small steps that you adviced me changed my whole life, even though they are small, it made a huge different and I learned to look at my and my life from a different perspective. Your gudience was priceless, THANK YOU SO MUCH for everything.",
  },
  {
    name: "Lone",
    location: "Denmark",
    copy: "I can wholeheartedly recommend Pernille's coaching. Pernille is passionate, professional, and highly skilled at creating a safe and trusting environment throughout the coaching sessions. She listens attentively and asks the right questions that get straight to the heart of the matter. Through our work together, I gained clarity about my career situation, and that clarity has stayed with me ever since. At no point did I doubt that I was the focus of the process. After each session, I was encouraged to reflect on and write down the key takeaways that felt most important to me. These reflections became practical focus points that I still use today. One realisation in particular has stayed with me and can be applied to any area of life: if I start today, I am already closer to my goal than if I continue putting it off. A huge thank you and my highest praise to you, Pernille.",
  },
  {
    name: "Milan",
    location: "Serbia",
    copy: "So I just want to recommend working with Pernille, she's an amazing coach to work with! Her session helped me to focus on my goals for the next period, where I have approached them step by step and not forced myself to do it instantly. Still working on all my goals, but her guidance in helping me to see the right path for me, helped me a lot, and made my mind clear on the goal and how to achieve it.",
  },
  {
    name: "Bernadett",
    location: "Hungary",
    copy: "I am very thankful for Pernille. In our session she patiently talked me through my ambitions and anxiety about professional and personal choices, and goals, connecting dots that I was either scared to connect or simply never saw in the first place. She helped me brake down the reasons of my hesitations, the potentials that I thought were just small ideas, identifying possibilities and the actions I should be taking, giving me tools to follow up on myself. She really listens to not just to what you talk about, but can see where your silence comes in - She guides you to get started on concrete thought processes, motivating to achieve. I would highly recommend anyone - at any age - to start working with Pernille, who feels stuck, frustrated, distracted or lost - or simply looking for a new motivation. She is professional and caring, and will for sure show you your best and what you are capable of!",
  },
];

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const swipeStartX = useRef<number | null>(null);

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  const handleTestimonialPointerUp = (clientX: number) => {
    if (swipeStartX.current === null) return;

    const distance = swipeStartX.current - clientX;
    swipeStartX.current = null;

    if (Math.abs(distance) < 42) return;

    if (distance > 0) {
      showNextTestimonial();
    } else {
      showPreviousTestimonial();
    }
  };

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
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/pernille-performance-logo.png" alt="" />
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#method">Method</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#who">For You</a>
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
              Elite performance coaching for women
            </h1>
            <p className="hero-lead hero-reveal">
              1:1 coaching for ambitious women in business, fitness, and life,
              built around discipline, strength, and execution.
            </p>
            <div className="hero-actions hero-reveal">
              <a className="button button-primary" href={applicationLink}>
                Level Up
              </a>
            </div>
            <p className="hero-microcopy hero-reveal">
              <span>REMOTE COACHING</span>
              <span>DECISIVE ACTION</span>
              <span>SERIOUS WOMEN ONLY</span>
            </p>
          </div>
          <figure className="hero-media hero-reveal">
            <picture>
              <source
                srcSet="/images/hero-4-good-960.webp 960w, /images/hero-4-good-1536.webp 1536w"
                sizes="(max-width: 680px) calc(100vw - 28px), (max-width: 1040px) calc(100vw - 40px), 48vw"
                type="image/webp"
              />
              <img
                src="/images/hero-4-good-1536.webp"
                alt="Pernille in a focused performance coaching portrait"
                width="1536"
                height="2048"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </figure>
        </section>

        <section
          className="section why-pernille"
          id="why-pernille"
          aria-labelledby="why-pernille-title"
          data-reveal
        >
          <div className="section-heading">
            <h2 id="why-pernille-title">Why Pernille</h2>
            <p>The standard behind the coaching</p>
          </div>
          <div className="why-pernille-copy">
            <p>
              Pernille Høgh Andreasen is a Danish performance coach with a
              background in elite sport, sports science, entrepreneurship, and
              international remote work.
            </p>
            <p>
              Before coaching women privately, she competed as a high-level
              dancer and represented Denmark twice at the World Championships.
              She later studied Sports Science and worked in elite athlete
              environments, supporting high-performers who were training under
              pressure and chasing demanding goals.
            </p>
            <p>
              Her coaching is built for women who have already proven they can
              achieve. The work is not motivation. It is not endless reflection.
              It is private, direct coaching around standards, decision-making,
              discipline, and execution.
            </p>
            <p>For women ready for the next level.</p>
          </div>
        </section>

        <section
          className="section method-section"
          id="method"
          aria-labelledby="method-title"
          data-reveal
        >
          <div className="section-heading">
            <p className="section-kicker">Method</p>
            <h2 id="method-title">Performance is trained</h2>
            <p>
              The work is personal, precise, and practical — built around the
              standards that support high-level output.
            </p>
          </div>
          <div className="method-principles">
            {pillars.map((pillar) => (
              <article className="method-principle" key={pillar.title}>
                <div className="method-principle-heading">
                  <span>{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                </div>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="testimonials"
          id="testimonials"
          aria-labelledby="testimonials-title"
          data-reveal
        >
          <div className="testimonials-heading">
            <p className="section-kicker">Testimonials</p>
            <h2 id="testimonials-title">Trusted by women doing the work</h2>
          </div>
          <div className="testimonial-carousel" aria-label="Client testimonials">
            <button
              className="testimonial-control testimonial-control-previous"
              type="button"
              aria-label="Previous testimonial"
              onClick={showPreviousTestimonial}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <div
              className="testimonial-viewport"
              onPointerDown={(event) => {
                swipeStartX.current = event.clientX;
              }}
              onPointerUp={(event) => handleTestimonialPointerUp(event.clientX)}
              onPointerCancel={() => {
                swipeStartX.current = null;
              }}
              onPointerLeave={() => {
                swipeStartX.current = null;
              }}
            >
              <div className={`testimonial-track testimonial-track-${activeTestimonial}`}>
                {testimonials.map((testimonial) => (
                  <div className="testimonial-slide" key={testimonial.name}>
                    <article className="testimonial-card">
                      <p>{testimonial.copy}</p>
                      <footer>
                        <strong>{testimonial.name}</strong>
                        <span>{testimonial.location}</span>
                      </footer>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="testimonial-control testimonial-control-next"
              type="button"
              aria-label="Next testimonial"
              onClick={showNextTestimonial}
            >
              <span aria-hidden="true">›</span>
            </button>
            <div className="testimonial-dots" aria-label="Choose testimonial">
              {testimonials.map((testimonial, index) => (
                <button
                  className={index === activeTestimonial ? "is-active" : undefined}
                  type="button"
                  key={testimonial.name}
                  aria-label={`Show ${testimonial.name}'s testimonial`}
                  aria-current={index === activeTestimonial}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="section split"
          id="who"
          aria-labelledby="who-title"
          data-reveal
        >
          <div className="section-heading">
            <p className="section-kicker">For You</p>
            <h2 id="who-title">For women who are already in motion</h2>
            <p>
              This is for athletes, founders, leaders, creatives, and
              high-achieving women who are ready to be coached directly. You
              may be building a business, competing in sport, leading a team,
              returning to your body, or preparing for your next level. The work
              starts where you are and raises the standard from there.
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

        <section className="apply" id="apply" aria-labelledby="apply-title" data-reveal>
          <p className="section-kicker">Apply</p>
          <h2 id="apply-title">Ready to level up?</h2>
          <p>If you are serious about raising your standard, apply for 1:1 coaching.</p>
          <a className="button button-primary" href={applicationLink}>
            Apply for Coaching
          </a>
          <span>Limited coaching spots available</span>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Pernille Performance</strong>
          <p>Elite 1:1 coaching for women in sport, business, and life.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#method">Method</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#who">For You</a>
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
