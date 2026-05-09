import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const TESTIMONIALS = [
  {
    quote:
      'AZ Quality Transmissions rebuilt the transmission on our delivery vans ahead of schedule. Clear pricing and the 2-year warranty matters when you run a fleet in the Valley.',
    author: 'MARK R.',
    role: 'Fleet Manager',
  },
  {
    quote:
      'My SUV was slipping between gears—they ran complimentary diagnostics, explained exactly what failed, and the rebuild has been flawless through summer heat.',
    author: 'SARAH L.',
    role: 'Homeowner, Scottsdale',
  },
  {
    quote:
      'Professional from diagnosis to pickup. Financing made a major rebuild manageable and the team communicated every milestone—our family car feels brand new again.',
    author: 'DAVID K.',
    role: 'Peoria Family',
  },
  {
    quote:
      'We route every Phoenix-area rollover and warranty concern to AZ Quality. Honest timelines, towing help on big jobs, and technicians who actually specialize in transmissions.',
    author: 'JASON M.',
    role: 'Dealership Liaison',
  },
]

const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=5600+Grand+Ave,+Glendale,+AZ+85301&t=&z=14&ie=UTF8&iwloc=&output=embed'

/** Bust intermediary caches/CDN staleness across deploys */
const MEDIA_CACHE_TAG = 'azqt-media-v6'

const HERO_VIDEO_PRIMARY =
  'https://cdn.pixabay.com/video/2020/05/25/40087-424424361_tiny.mp4'
/** Secondary automotive clip if primary Pixabay stalls */
const HERO_VIDEO_FALLBACK =
  'https://cdn.pixabay.com/video/2023/10/24/186358-877708304_tiny.mp4'

const CORE_IMG_REPAIR =
  'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=1200'
const CORE_IMG_REBUILD =
  'https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=1200'
const CORE_IMG_MAINT =
  'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1200'

const GALLERY_IMG_1 =
  'https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=800'
const GALLERY_IMG_2 =
  'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=800'
const GALLERY_IMG_3 =
  'https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=800'

const HERO_POSTER =
  'https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=1200'

const Home = (props) => {
  const [tIndex, setTIndex] = useState(0)
  const [heroVideoSrc, setHeroVideoSrc] = useState(HERO_VIDEO_PRIMARY)
  useEffect(() => {
    const id = window.setInterval(
      () => setTIndex((i) => (i + 1) % TESTIMONIALS.length),
      8000,
    )
    return () => window.clearInterval(id)
  }, [])
  const goSlide = (dir) =>
    setTIndex((i) => {
      const n = TESTIMONIALS.length
      return (i + dir + n) % n
    })

  return (
    <>
      <div className="home-container1">
        <Head>
          <title>
            AZ Quality Transmissions &amp; Auto Repair | Glendale AZ
          </title>
          <meta
            name="description"
            content="Transmission repair, rebuilds, and maintenance in Glendale, AZ. 40+ years experience, free diagnostics, and 2-year unlimited mileage warranty."
          />
          <meta property="og:title" content="AZ Quality Transmissions & Auto Repair | Glendale AZ" />
          <meta
            property="og:description"
            content="Transmission repair, rebuilds, and maintenance in Glendale, AZ. 40+ years experience, free diagnostics, and 2-year unlimited mileage warranty."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="AZ Quality Transmissions & Auto Repair | Glendale AZ"
          />
          <meta
            name="twitter:description"
            content="Transmission repair, rebuilds, and maintenance in Glendale, AZ. 40+ years experience, free diagnostics, and 2-year unlimited mileage warranty."
          />
        </Head>
        <Navigation></Navigation>
        <section id="home" className="hero-concrete">
          <div className="hero-concrete-bg" aria-hidden="true">
            <video
              key={heroVideoSrc}
              src={heroVideoSrc}
              poster={HERO_POSTER}
              loop={true}
              muted={true}
              autoPlay={true}
              playsInline={true}
              preload="auto"
              controls={false}
              className="hero-concrete-video"
              onError={() => {
                setHeroVideoSrc((prev) =>
                  prev === HERO_VIDEO_FALLBACK ? prev : HERO_VIDEO_FALLBACK,
                )
              }}
            >
              Your browser does not support HTML5 video.
            </video>
            <div className="hero-concrete-overlay"></div>
          </div>
          <div className="hero-concrete-content">
            <div className="hero-concrete-brand">
              <img
                src="/az-quality-logo-transparent.png"
                alt="AZ Quality Transmissions logo"
                className="hero-concrete-logo"
              />
            </div>
            <h1 className="hero-concrete-main-title hero-title">
              Expert Transmission Repair &amp; Rebuilds in Glendale
            </h1>
            <p className="hero-concrete-sub hero-subtitle">
              Family-owned with 40+ years of combined experience. Specialized in
              foreign and domestic vehicles with an industry-leading 2-year
              warranty.
            </p>
            <div className="hero-concrete-actions">
              <a href="#contact">
                <div className="btn-xl hero-concrete-btn btn btn-accent">
                  <span>GET MY FREE ESTIMATE</span>
                </div>
              </a>
              <a href="tel:6232813331">
                <div className="btn-xl btn-outline hero-concrete-btn btn">
                  <span>CALL (623) 281-3331</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="core-services-section">
          <div className="core-services-inner">
            <h2 className="core-services-heading section-title">
              TRANSMISSION SERVICES
            </h2>
            <div className="core-services-grid">
              <article className="core-service-card" key={`core-repair-${MEDIA_CACHE_TAG}`}>
                <div className="core-service-media">
                  <img
                    key={`img-repair-${MEDIA_CACHE_TAG}`}
                    src={CORE_IMG_REPAIR}
                    alt="Close-up of transmission and engine bay components"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    decoding="async"
                  />
                </div>
                <div className="core-service-body">
                  <h3 className="section-subtitle">TRANSMISSION REPAIR</h3>
                  <p className="section-content">
                    Comprehensive repair services for all makes.
                  </p>
                </div>
              </article>
              <article className="core-service-card" key={`core-rebuild-${MEDIA_CACHE_TAG}`}>
                <div className="core-service-media">
                  <img
                    key={`img-rebuild-${MEDIA_CACHE_TAG}`}
                    src={CORE_IMG_REBUILD}
                    alt="Mechanic working on gears and bench rebuild work"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    decoding="async"
                  />
                </div>
                <div className="core-service-body">
                  <h3 className="section-subtitle">TRANSMISSION REBUILD</h3>
                  <p className="section-content">
                    Full rebuilds with high-quality parts.
                  </p>
                </div>
              </article>
              <article className="core-service-card" key={`core-maint-${MEDIA_CACHE_TAG}`}>
                <div className="core-service-media">
                  <img
                    key={`img-maint-${MEDIA_CACHE_TAG}`}
                    src={CORE_IMG_MAINT}
                    alt="Transmission fluid check and diagnostic maintenance"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    decoding="async"
                  />
                </div>
                <div className="core-service-body">
                  <h3 className="section-subtitle">TRANSMISSION MAINTENANCE</h3>
                  <p className="section-content">
                    Flushes and preventative checks.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="value-propositions-heading"
          className="expertise-grid value-propositions"
        >
          <div className="expertise-container">
            <h2
              id="value-propositions-heading"
              className="expertise-heading section-title"
            >
              WHY DRIVERS CHOOSE US
            </h2>
            <div className="expertise-layout">
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">FREE BASIC DIAGNOSTICS</h3>
                  <p className="section-content">
                    No-cost transmission checks so you understand what your
                    vehicle needs before committing to Transmission &amp; Auto
                    Repair work.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">FREE TOWING</h3>
                  <p className="section-content">
                    Complimentary towing up to 10 miles when you authorize major
                    Transmission &amp; Auto Repair services with our shop.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">FINANCING AVAILABLE</h3>
                  <p className="section-content">
                    Flexible payment options designed to take the stress out of
                    major Transmission &amp; Auto Repair and rebuild projects.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">WARRANTY</h3>
                  <p className="section-content">
                    2-year unlimited mileage coverage—ask us how it applies to
                    your Transmission &amp; Auto Repair estimate.
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
            <div className="gallery-item" key={`gal-1-${MEDIA_CACHE_TAG}`}>
              <img
                key={`gallery-img-1-${MEDIA_CACHE_TAG}`}
                alt="Automotive technician at a workbench"
                src={GALLERY_IMG_1}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                decoding="async"
              />
            </div>
            <div className="gallery-item" key={`gal-2-${MEDIA_CACHE_TAG}`}>
              <img
                key={`gallery-img-2-${MEDIA_CACHE_TAG}`}
                alt="Detailed automotive transmission gears"
                src={GALLERY_IMG_2}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                decoding="async"
              />
            </div>
            <div className="gallery-item" key={`gal-3-${MEDIA_CACHE_TAG}`}>
              <img
                key={`gallery-img-3-${MEDIA_CACHE_TAG}`}
                alt="Professional automotive workshop and garage bay"
                src={GALLERY_IMG_3}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                decoding="async"
              />
            </div>
          </div>
        </section>
        <section className="testimonials-section" aria-labelledby="reviews-heading">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <span className="testimonials-eyebrow">CLIENT VOICES</span>
              <h2 id="reviews-heading" className="testimonials-heading section-title">
                CUSTOMER REVIEWS
              </h2>
              <p className="testimonials-subtitle">
                Trusted transmission &amp; auto repair specialists for Arizona drivers.
              </p>
            </div>
            <div
              className="testimonials-carousel"
              aria-roledescription="carousel"
              aria-label="Customer reviews"
            >
              <div className="carousel-viewport">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${tIndex * 100}%)`,
                  }}
                >
                  {TESTIMONIALS.map((item, idx) => (
                    <figure
                      key={`${item.author}-${idx}`}
                      className="testimonial-card carousel-slide"
                      aria-current={idx === tIndex ? 'true' : undefined}
                    >
                      <span className="testimonial-quote-mark">&ldquo;</span>
                      <blockquote className="testimonial-quote">
                        {item.quote}
                      </blockquote>
                      <figcaption className="testimonial-meta">
                        <span className="testimonial-author">{item.author}</span>
                        <span className="testimonial-role">{item.role}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="carousel-controls">
                <button
                  type="button"
                  className="carousel-btn"
                  aria-label="Previous review"
                  onClick={() => goSlide(-1)}
                >
                  <span aria-hidden="true">&larr;</span>
                </button>
                <div className="carousel-dots" role="tablist">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={`dot-${idx}`}
                      type="button"
                      role="tab"
                      aria-selected={idx === tIndex}
                      aria-label={`Show review ${idx + 1}`}
                      className={
                        'carousel-dot' + (idx === tIndex ? ' is-active' : '')
                      }
                      onClick={() => setTIndex(idx)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="carousel-btn"
                  aria-label="Next review"
                  onClick={() => goSlide(1)}
                >
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="quote-wizard">
          <div className="quote-wizard-layout">
            <div className="quote-wizard-shell">
              <div className="quote-wizard-container">
            <div className="quote-wizard-header">
              <h2 className="section-title">GET A QUOTE</h2>
              <p className="section-content">
                Arizona&apos;s trusted Transmission &amp; Auto Repair specialists.
                Tell us about your vehicle—we&apos;ll follow up quickly.
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
                  STEP 1: WHAT TYPE OF TRANSMISSION &amp; AUTO REPAIR DO YOU NEED?
                </span>
                <p className="quote-step-hint">
                  Pick the Transmission &amp; Auto Repair lane that fits your vehicle.
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
                      <span className="quote-service-title">
                        TRANSMISSION REBUILDS &amp; REPAIR
                      </span>
                      <span className="quote-service-desc">
                        Automatic, manual, and CVT service tailored to passenger
                        cars and SUVs
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
                      <span className="quote-service-title">
                        TRUCK &amp; FLEET SERVICES
                      </span>
                      <span className="quote-service-desc">
                        Heavy-duty and commercial Transmission &amp; Auto Repair coverage
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
                      <span className="quote-service-title">GENERAL AUTO CARE</span>
                      <span className="quote-service-desc">
                        Computer diagnostics and bumper-to-bumper maintenance wrapped
                        into Transmission &amp; Auto Repair appointments
                      </span>
                    </div>
                  </label>
                  <label className="quote-service-card">
                    <input type="radio" name="service" value="inspection" />
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
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                          <rect x="9" y="3" width="6" height="4" rx="1" />
                          <path d="M9 12h6M9 16h6M9 8h2M15 8h2" />
                        </svg>
                      </span>
                      <span className="quote-service-title">
                        SCHEDULE A VEHICLE INSPECTION
                      </span>
                      <span className="quote-service-desc">
                        Get a comprehensive check-up before major issues arise.
                      </span>
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
                        placeholder="(623) 281-3331"
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
                      placeholder="Year, make, model, symptoms, noises, warning lights, towing needs, and mileage…"
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
                  When do you need Transmission &amp; Auto Repair scheduled?
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
                    Thank you. We&apos;ll be in touch within 24 hours to confirm
                    details for your Transmission &amp; Auto Repair visit.
                  </p>
                  <a href="tel:6232813331" className="quote-success-phone">
                    Or call us now: (623) 281-3331
                  </a>
                </div>
              </div>
            </form>
            </div>
          </div>
          <div
            className="snap-finance-widget"
            role="img"
            aria-label="Snap Finance available"
          >
            <div className="snap-finance-mark">
              <div className="snap-finance-line snap-finance-line-brand">
                <span className="snap-finance-snap">Snap</span>
                <span className="snap-finance-finance-word">Finance</span>
              </div>
              <div className="snap-finance-line snap-finance-line-available">
                Available
              </div>
            </div>
          </div>
          </div>
        </section>
        <section id="coverage" className="location-section">
          <div className="location-container location-split">
            <div className="location-card">
              <div className="location-content">
                <span className="location-eyebrow">SERVICE AREA</span>
                <h2 className="section-title location-title">
                  Glendale HQ &amp; West Valley Coverage
                </h2>
                <p className="location-description">
                  Family-owned Transmission &amp; Auto Repair from 5600 Grand Ave
                  with mobile support across Glendale, Peoria, El Mirage, Sun City
                  West, Scottsdale, Phoenix, and Avondale.
                </p>
                <a href="tel:6232813331" className="location-phone-link">
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
                  <span className="location-phone">(623) 281-3331</span>
                </a>
                <p className="location-status">
                  Mon–Fri 8am–5pm · Sat 8am–3pm · Sun Closed · Licensed, Bonded
                  &amp; Insured
                </p>
                <a href="#contact" className="location-cta-link">
                  <div className="btn-lg location-cta btn btn-accent">
                    <span>GET A FREE ESTIMATE</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="location-map-shell">
              <iframe
                className="location-map-iframe"
                title="Glendale HQ — AZ Quality Transmissions, 5600 Grand Ave"
                src={MAP_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        <section
          id="process"
          className="expertise-grid expertise-how-it-works how-it-works-bottom"
        >
          <div className="expertise-container">
            <h2 className="expertise-heading section-title">HOW IT WORKS</h2>
            <div className="expertise-layout">
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">01. DIAGNOSTICS &amp; ESTIMATE</h3>
                  <p className="section-content">
                    Complimentary transmission checks plus computer diagnostics
                    where needed—we explain findings and outline options before any
                    work begins.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">02. AUTHORIZED REPAIR OR REBUILD</h3>
                  <p className="section-content">
                    After you approve the plan, specialists rebuild or repair with
                    quality parts and disciplined procedures—focused on longevity.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">03. ROAD-TESTED QUALITY</h3>
                  <p className="section-content">
                    Every vehicle is road-tested, results reviewed with you, and
                    backed by our 2-year unlimited mileage warranty where
                    applicable.
                  </p>
                </div>
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
              html={`<script defer data-name="azqt-site-logic">
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

  document.querySelectorAll(".core-service-card, .expertise-card").forEach((el) => {
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
