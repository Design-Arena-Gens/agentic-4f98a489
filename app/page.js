import Image from "next/image";

const heroMetrics = [
  { value: "8,500+", label: "Learners accelerated" },
  { value: "92%", label: "Average course completion" },
  { value: "4.9/5", label: "Mentor satisfaction" },
  { value: "14", label: "Countries represented" }
];

const features = [
  {
    title: "Adaptive Learning Blueprint",
    description:
      "Dynamic pathways tailored in real-time using AI insights and mentor expertise, so every learner moves at their ideal pace.",
    icon: "🧭"
  },
  {
    title: "Mentor-Matched Support",
    description:
      "Certified educators and industry mentors provide live sessions, weekly check-ins, and formative feedback loops.",
    icon: "🤝"
  },
  {
    title: "Outcomes Dashboard",
    description:
      "Parent and student dashboards surface progress signals, mastery snapshots, and actionable next steps in one view.",
    icon: "📊"
  },
  {
    title: "Portfolio-Ready Projects",
    description:
      "Learners build a body of evidence across STEM, humanities, and creative arts with real-world briefs and showcase nights.",
    icon: "🚀"
  }
];

const curriculum = [
  {
    title: "Launch Foundations",
    bullets: [
      "Curiosity sprints that ignite core subject excitement",
      "AI study coach to build executive function skills",
      "Goal planning with parents and mentors"
    ]
  },
  {
    title: "Momentum Studios",
    bullets: [
      "Interdisciplinary projects with real startup partners",
      "Weekly mentor labs and peer critique circles",
      "Design thinking applied to local community challenges"
    ]
  },
  {
    title: "Pathway Capstone",
    bullets: [
      "University-aligned research experience",
      "Venture pitch showcase judged by industry leaders",
      "Scholarship portfolio and admissions guidance"
    ]
  }
];

const testimonials = [
  {
    quote:
      "My daughter went from disengaged to launching a climate app prototype with her mentor team. Lumina gave her a direction and the confidence to lead.",
    author: "Priya Desai, Parent"
  },
  {
    quote:
      "The Momentum Studios curriculum unlocked a level of collaboration and critical thinking I rarely see in traditional classrooms.",
    author: "Mr. Alvarez, Partner School Director"
  },
  {
    quote:
      "As a student mentor, the dashboards make it simple to spot when a learner needs support. It's the future of personalized education.",
    author: "Amina, Lead Mentor"
  }
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <span className="nav-logo">Lumina Learning</span>
        <div className="nav-links">
          <a href="#program">Program</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#testimonials">Stories</a>
          <a href="#contact">Enroll</a>
        </div>
      </nav>

      <section className="hero" id="program">
        <div className="container hero-content">
          <span className="badge">Where personalized learning meets real-world impact</span>
          <h1>Design a future-ready learning journey for every student.</h1>
          <p>
            Lumina Learning blends adaptive technology, mentor-guided experiences, and human-centered design to help students build mastery, agency, and a portfolio that opens doors.
          </p>
          <div className="hero-cta">
            <a className="button primary" href="#contact">
              Book a discovery call
            </a>
            <a className="button secondary" href="#curriculum">
              Explore the curriculum
            </a>
          </div>
          <div className="metrics">
            {heroMetrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2>The Lumina advantage</h2>
          <p className="section-lead">
            A holistic ecosystem that powers mastery-based learning with human support, actionable data, and projects that translate into real opportunities.
          </p>
          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon" aria-hidden>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="curriculum">
        <div className="container">
          <h2>Three phases. Lifelong outcomes.</h2>
          <p className="section-lead">
            A scaffolded curriculum that balances rigor with creativity so students discover interests, build portfolio-worthy work, and graduate with confidence.
          </p>
          <div className="curriculum-cards">
            {curriculum.map((stage) => (
              <article className="curriculum-card" key={stage.title}>
                <h3>{stage.title}</h3>
                <ul>
                  {stage.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <h2>Trusted by families, mentors, and schools</h2>
          <p className="section-lead">
            Community-led learning experiences backed by measurable outcomes and joyful engagement.
          </p>
          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <article className="testimonial" key={testimonial.author}>
                <p>“{testimonial.quote}”</p>
                <strong>{testimonial.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="cta-card">
            <h2>Let’s design your learner’s next chapter</h2>
            <p>
              Join a Lumina discovery call to craft a personalized program plan with our learning strategists. Limited cohort spots open for Fall 2024.
            </p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a className="button primary" href="https://cal.com" target="_blank" rel="noreferrer">
                Reserve a cohort consultation
              </a>
              <a className="button secondary" href="mailto:hello@luminalearning.com">
                Email our admissions team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Founder note">
        <div className="container">
          <div className="founder">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Students collaborating on a project with their mentor"
              width={800}
              height={640}
              priority
            />
            <div>
              <h3>“Every student deserves a guide, not just a syllabus.”</h3>
              <p>
                After a decade leading innovation labs across public and independent schools, our founder Maya Chen built Lumina to close the gap between curiosity and real-world impact. Our mentors help students architect futures as unique as they are.
              </p>
              <div className="highlight">
                &ldquo;Lumina is the partner we wished existed when we were advising schools on future-ready learning. This team is obsessed with student growth and data-backed outcomes.&rdquo;
              </div>
              <p>
                Maya Chen · Founder & CEO · Former Director of Learning Innovation, Horizon Academies
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          © {new Date().getFullYear()} Lumina Learning · Crafted for curious minds · <a href="mailto:hello@luminalearning.com">hello@luminalearning.com</a>
        </div>
      </footer>
    </main>
  );
}
