import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>PHX Junk Removal</title>
          <meta property="og:title" content="PHX Junk Removal" />
        </Head>
        <Navigation></Navigation>
        <section id="home" className="hero-concrete">
          <div className="hero-concrete-bg">
            <video
              src="https://assets.mixkit.co/videos/49210/49210-720.mp4"
              loop={true}
              muted={true}
              poster="https://assets.mixkit.co/videos/49210/49210-thumb-720-3.jpg"
              autoPlay={true}
              playsInline={true}
              className="hero-concrete-video"
            ></video>
            <div className="hero-concrete-overlay"></div>
          </div>
          <div className="hero-concrete-content">
            <div className="hero-concrete-brand">
              <img
                src="/phx-logo.png"
                alt="PHX Junk Removal logo"
                className="hero-concrete-logo"
              />
              <h1 className="hero-concrete-main-title hero-title">
                PHX JUNK REMOVAL
              </h1>
            </div>
            <p className="hero-concrete-sub hero-subtitle">
              FAST, RELIABLE JUNK REMOVAL — WE HAUL SO YOU CAN RELAX.
            </p>
            <div className="hero-concrete-actions">
              <a href="#contact">
                <div className="btn-xl hero-concrete-btn btn btn-accent">
                  <span>REQUEST AN ESTIMATE</span>
                </div>
              </a>
              <a href="#gallery">
                <div className="btn-xl btn-outline hero-concrete-btn btn">
                  <span>VIEW OUR WORK</span>
                </div>
              </a>
            </div>
            <a href="tel:623300447" className="hero-concrete-phone-link">
              <div className="hero-concrete-phone">
                <span className="hero-concrete-phone-icon">
                  <svg
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="hero-concrete-phone-text">
                  CALL NOW: 623-300-447
                </span>
              </div>
            </a>
          </div>
        </section>
        <section id="services" className="expertise-grid expertise-how-it-works">
          <div className="expertise-container">
            <h2 className="expertise-heading section-title">HOW IT WORKS</h2>
            <div className="expertise-layout">
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">01. JOB EVALUATION</h3>
                  <p className="section-content">
                    We review photos or a quick description, estimate volume and
                    labor, and give you a clear price range before we schedule.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">02. IN-PERSON MEETING</h3>
                  <p className="section-content">
                    We walk the property together, confirm access and what stays
                    or goes, then lock in a firm quote and pickup window.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">03. JOB COMPLETION</h3>
                  <p className="section-content">
                    Crew loads out fast, sweeps the area, and disposes or donates
                    items responsibly so you&apos;re left with a clean space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery-preview">
          <div className="gallery-header">
            <h2 className="gallery-title section-title">PROJECT GALLERY</h2>
          </div>
          <div className="gallery-scroller">
            <div className="gallery-item">
              <img
                alt="PHX Junk Removal project photo 1"
                src="https://images.pexels.com/photos/37121405/pexels-photo-37121405.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                alt="PHX Junk Removal project photo 2"
                src="https://images.pexels.com/photos/37121400/pexels-photo-37121400.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                alt="PHX Junk Removal project photo 3"
                src="https://images.pexels.com/photos/37121406/pexels-photo-37121406.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                alt="PHX Junk Removal project photo 4"
                src="https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <span className="testimonials-eyebrow">CLIENT VOICES</span>
              <h2 className="testimonials-heading section-title">
                CLIENT REVIEWS
              </h2>
              <p className="testimonials-subtitle">
                Trusted by Arizona homeowners.
              </p>
            </div>
            <div className="testimonials-grid">
              <figure className="testimonial-card">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote className="testimonial-quote">
                  PHX Junk Removal cleared our retail back room in one morning.
                  Heavy fixtures, pallets, and old displays — all gone. Fair
                  price and the crew was careful with our floors.
                </blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-author">MARK R.</span>
                  <span className="testimonial-role">Retail Manager</span>
                </figcaption>
              </figure>
              <figure className="testimonial-card">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote className="testimonial-quote">
                  Best cleanout we&apos;ve had after a garage and patio
                  overhaul. They showed up on time, separated donate-able items,
                  and left the driveway cleaner than they found it.
                </blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-author">SARAH L.</span>
                  <span className="testimonial-role">Homeowner, Scottsdale</span>
                </figcaption>
              </figure>
              <figure className="testimonial-card">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote className="testimonial-quote">
                  Professional from the first call to the last box on the truck.
                  They handled a full estate cleanout with empathy and zero
                  surprise fees — exactly what our family needed.
                </blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-author">DAVID K.</span>
                  <span className="testimonial-role">Estate Coordinator</span>
                </figcaption>
              </figure>
              <figure className="testimonial-card">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote className="testimonial-quote">
                  We&apos;ve used PHX Junk Removal on three rental turnovers.
                  Fast response, consistent pricing, and they actually show up
                  when they say they will. Our go-to in the Valley.
                </blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-author">JASON M.</span>
                  <span className="testimonial-role">Property Manager</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section id="contact" className="quote-wizard">
          <div className="quote-wizard-container">
            <div className="quote-wizard-header">
              <h2 className="section-title">GET A QUOTE</h2>
              <p className="section-content">
                Arizona&apos;s trusted junk removal team. Tell us what you need
                hauled — one step at a time.
              </p>
            </div>
            <div className="quote-progress">
              <div className="quote-progress-step is-active" data-step-indicator="1">
                <span className="quote-progress-num">1</span>
                <span className="quote-progress-label">SERVICE</span>
              </div>
              <div className="quote-progress-bar"></div>
              <div className="quote-progress-step" data-step-indicator="2">
                <span className="quote-progress-num">2</span>
                <span className="quote-progress-label">DETAILS</span>
              </div>
              <div className="quote-progress-bar"></div>
              <div className="quote-progress-step" data-step-indicator="3">
                <span className="quote-progress-num">3</span>
                <span className="quote-progress-label">TIMELINE</span>
              </div>
            </div>
            <form
              id="quoteForm"
              action="#"
              method="POST"
              className="quote-wizard-form"
              noValidate
            >
              <div className="quote-step is-active" data-step="1">
                <span className="quote-step-label">
                  STEP 1: WHAT KIND OF SERVICE DO YOU NEED?
                </span>
                <p className="quote-step-hint">
                  Select the option that best matches your cleanout or haul-away.
                </p>
                <div className="quote-card-grid">
                  <label className="quote-service-card">
                    <input
                      type="radio"
                      name="service"
                      value="residential"
                      required
                    />
                    <div className="quote-service-card-inner">
                      <span className="quote-service-icon">
                        <svg
                          width="32"
                          xmlns="http://www.w3.org/2000/svg"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
                        </svg>
                      </span>
                      <span className="quote-service-title">RESIDENTIAL SERVICE</span>
                      <span className="quote-service-desc">
                        Homes, garages, yards &amp; single-item pickups
                      </span>
                    </div>
                  </label>
                  <label className="quote-service-card">
                    <input type="radio" name="service" value="commercial" />
                    <div className="quote-service-card-inner">
                      <span className="quote-service-icon">
                        <svg
                          width="32"
                          xmlns="http://www.w3.org/2000/svg"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 20l8-16 8 16M8 20l4-8 4 8" />
                        </svg>
                      </span>
                      <span className="quote-service-title">COMMERCIAL SERVICE</span>
                      <span className="quote-service-desc">
                        Offices, retail, warehouses &amp; job-site debris
                      </span>
                    </div>
                  </label>
                  <label className="quote-service-card">
                    <input type="radio" name="service" value="custom" />
                    <div className="quote-service-card-inner">
                      <span className="quote-service-icon">
                        <svg
                          width="32"
                          xmlns="http://www.w3.org/2000/svg"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                        </svg>
                      </span>
                      <span className="quote-service-title">CUSTOM WORK</span>
                    </div>
                  </label>
                </div>
                <div className="quote-step-actions">
                  <span className="quote-step-spacer"></span>
                  <button
                    type="button"
                    className="btn btn-accent quote-next-btn"
                    data-next="2"
                  >
                    NEXT &nbsp;→
                  </button>
                </div>
              </div>

              <div className="quote-step" data-step="2">
                <span className="quote-step-label">
                  STEP 2: PROJECT DETAILS
                </span>
                <p className="quote-step-hint">
                  Full name is required. Provide either an email or phone
                  number — both are welcome but only one is required. Project
                  notes are optional.
                </p>
                <div className="quote-fields">
                  <div className="quote-field">
                    <label className="quote-field-label">
                      FULL NAME <span className="quote-req">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      required
                      className="quote-input"
                    />
                  </div>
                  <div className="quote-field-row">
                    <div className="quote-field">
                      <label className="quote-field-label">
                        EMAIL <span className="quote-opt">(email or phone)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="quote-input"
                      />
                    </div>
                    <div className="quote-field">
                      <label className="quote-field-label">
                        PHONE <span className="quote-opt">(email or phone)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(623) 300-447"
                        className="quote-input"
                      />
                    </div>
                  </div>
                  <div className="quote-field">
                    <label className="quote-field-label">
                      PROJECT NOTES <span className="quote-opt">(optional)</span>
                    </label>
                    <textarea
                      name="details"
                      placeholder="What needs to be removed, approximate volume, access (stairs, gate), and any donation or recycle preferences…"
                      className="quote-input quote-textarea"
                    ></textarea>
                  </div>
                  <p className="quote-error" data-error="contact">
                    Please provide at least an email address or a phone number.
                  </p>
                </div>
                <div className="quote-step-actions">
                  <button
                    type="button"
                    className="btn btn-outline quote-back-btn"
                    data-prev="1"
                  >
                    ← &nbsp;BACK
                  </button>
                  <button
                    type="button"
                    className="btn btn-accent quote-next-btn"
                    data-next="3"
                  >
                    NEXT &nbsp;→
                  </button>
                </div>
              </div>

              <div className="quote-step" data-step="3">
                <span className="quote-step-label">STEP 3: TIMELINE</span>
                <p className="quote-step-hint">
                  When do you need items removed?
                </p>
                <div className="quote-timeline-grid">
                  <label className="quote-timeline-card">
                    <input type="radio" name="timeline" value="asap" required />
                    <div className="quote-timeline-card-inner">
                      <span className="quote-timeline-tag">URGENT</span>
                      <span className="quote-timeline-title">ASAP</span>
                      <span className="quote-timeline-desc">
                        Ready to start this week
                      </span>
                    </div>
                  </label>
                  <label className="quote-timeline-card">
                    <input type="radio" name="timeline" value="2-4-weeks" />
                    <div className="quote-timeline-card-inner">
                      <span className="quote-timeline-tag">SOON</span>
                      <span className="quote-timeline-title">2 – 4 WEEKS</span>
                      <span className="quote-timeline-desc">
                        Planning to start within a month
                      </span>
                    </div>
                  </label>
                  <label className="quote-timeline-card">
                    <input type="radio" name="timeline" value="1-3-months" />
                    <div className="quote-timeline-card-inner">
                      <span className="quote-timeline-tag">PLANNING</span>
                      <span className="quote-timeline-title">1 – 3 MONTHS</span>
                      <span className="quote-timeline-desc">
                        Scheduling for the next quarter
                      </span>
                    </div>
                  </label>
                  <label className="quote-timeline-card">
                    <input type="radio" name="timeline" value="just-quote" />
                    <div className="quote-timeline-card-inner">
                      <span className="quote-timeline-tag">EXPLORING</span>
                      <span className="quote-timeline-title">JUST A QUOTE</span>
                      <span className="quote-timeline-desc">
                        Pricing only, no firm timeline
                      </span>
                    </div>
                  </label>
                </div>
                <div className="quote-step-actions">
                  <button
                    type="button"
                    className="btn btn-outline quote-back-btn"
                    data-prev="2"
                  >
                    ← &nbsp;BACK
                  </button>
                  <button
                    type="submit"
                    className="btn btn-accent quote-submit-btn"
                  >
                    SUBMIT REQUEST
                  </button>
                </div>
              </div>

              <div className="quote-step quote-success" data-step="4">
                <div className="quote-success-inner">
                  <span className="quote-success-icon">
                    <svg
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  <h3 className="quote-success-title">REQUEST RECEIVED</h3>
                  <p className="quote-success-text">
                    Thank you. We&apos;ll be in touch within 24 hours to
                    confirm details and schedule a free on-site estimate.
                  </p>
                  <a href="tel:623300447" className="quote-success-phone">
                    Or call us now: 623-300-447
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="location-section">
          <div className="location-container">
            <div className="location-card">
              <div className="location-content">
                <span className="location-eyebrow">SERVICE AREA</span>
                <h2 className="section-title location-title">
                  SERVING GREATER PHOENIX
                </h2>
                <p className="location-description">
                  Arizona&apos;s trusted junk removal team. Based in Phoenix, we
                  cover the Valley and surrounding communities.
                </p>
                <a href="tel:623300447" className="location-phone-link">
                  <span className="location-phone-icon">
                    <svg
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" />
                    </svg>
                  </span>
                  <span className="location-phone">623-300-447</span>
                </a>
                <p className="location-status">
                  Licensed, Bonded &amp; Insured
                </p>
                <a href="#contact" className="location-cta-link">
                  <div className="btn-lg location-cta btn btn-accent">
                    <span>GET A FREE ESTIMATE</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
::selection {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="phx-junk-logic">
(function(){
  // Reveal-on-scroll for cards
  const observerOptions = { threshold: 0.1 }
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".expertise-card, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.5s ease-out"
    revealOnScroll.observe(el)
  })

  // Multi-step Quote Wizard
  const form = document.getElementById("quoteForm")
  if (!form) return
  const steps = form.querySelectorAll(".quote-step")
  const indicators = document.querySelectorAll(".quote-progress-step")
  const bars = document.querySelectorAll(".quote-progress-bar")

  function showStep(stepNum) {
    steps.forEach((s) => s.classList.remove("is-active"))
    const target = form.querySelector('.quote-step[data-step="' + stepNum + '"]')
    if (target) target.classList.add("is-active")

    indicators.forEach((ind) => {
      const n = parseInt(ind.getAttribute("data-step-indicator"), 10)
      ind.classList.remove("is-active", "is-complete")
      if (n < stepNum) ind.classList.add("is-complete")
      if (n === stepNum) ind.classList.add("is-active")
    })
    bars.forEach((bar, idx) => {
      bar.classList.remove("is-filled")
      if (idx + 1 < stepNum) bar.classList.add("is-filled")
    })

    // scroll to top of wizard
    const wizard = document.querySelector(".quote-wizard-container")
    if (wizard) {
      const top = wizard.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({ top: top, behavior: "smooth" })
    }
  }

  function validateStep(stepNum) {
    if (stepNum === 1) {
      const service = form.querySelector('input[name="service"]:checked')
      if (!service) {
        flashError("Please select a service to continue.")
        return false
      }
      return true
    }
    if (stepNum === 2) {
      const name = form.querySelector('input[name="fullName"]')
      const email = form.querySelector('input[name="email"]')
      const phone = form.querySelector('input[name="phone"]')
      const errEl = form.querySelector('[data-error="contact"]')
      if (errEl) errEl.classList.remove("is-visible")
      ;[name, email, phone].forEach((el) => el && el.classList.remove("has-error"))

      let ok = true
      if (!name.value.trim()) {
        name.classList.add("has-error")
        ok = false
      }
      const hasEmail = email.value.trim().length > 0
      const hasPhone = phone.value.trim().length > 0
      if (!hasEmail && !hasPhone) {
        email.classList.add("has-error")
        phone.classList.add("has-error")
        if (errEl) errEl.classList.add("is-visible")
        ok = false
      }
      if (!ok) flashError("Please complete the required fields.")
      return ok
    }
    if (stepNum === 3) {
      const tl = form.querySelector('input[name="timeline"]:checked')
      if (!tl) {
        flashError("Please choose a timeline.")
        return false
      }
      return true
    }
    return true
  }

  function flashError(msg) {
    console.warn(msg)
  }

  form.querySelectorAll(".quote-next-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = parseInt(btn.getAttribute("data-next"), 10)
      const current = next - 1
      if (validateStep(current)) showStep(next)
    })
  })

  form.querySelectorAll(".quote-back-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prev = parseInt(btn.getAttribute("data-prev"), 10)
      showStep(prev)
    })
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (validateStep(3)) {
      showStep(4)
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
