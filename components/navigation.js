import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="mainNav" className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a className="navigation-brand-link">
                <div className="navigation-brand">
                  <img
                    src="/phx-logo.png"
                    alt="PHX Junk Removal logo"
                    className="navigation-brand-logo"
                  />
                  <span className="navigation-logo-text">
                    PHX JUNK REMOVAL
                  </span>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-links">
              <a href="#home" className="navigation-link-anchor">
                <div className="navigation-link">
                  <span>HOME</span>
                </div>
              </a>
              <a href="#services" className="navigation-link-anchor">
                <div className="navigation-link">
                  <span>SERVICES</span>
                </div>
              </a>
              <a href="#gallery" className="navigation-link-anchor">
                <div className="navigation-link">
                  <span>GALLERY</span>
                </div>
              </a>
              <a href="#contact" className="navigation-link-anchor">
                <div className="navigation-link">
                  <span>CONTACT</span>
                </div>
              </a>
            </div>
            <div className="navigation-actions">
              <a href="#contact" className="navigation-link-anchor">
                <div className="btn navigation-cta">
                  <span>GET A QUOTE</span>
                </div>
              </a>
              <button
                id="mobileMenuOpen"
                aria-label="Open menu"
                aria-expanded="false"
                className="navigation-mobile-toggle"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div id="mobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link href="/">
              <a className="navigation-brand-link">
                <div className="navigation-brand">
                  <img
                    src="/phx-logo.png"
                    alt="PHX Junk Removal logo"
                    className="navigation-brand-logo"
                  />
                  <span className="navigation-logo-text">
                    PHX JUNK REMOVAL
                  </span>
                </div>
              </a>
            </Link>
            <button
              id="mobileMenuClose"
              aria-label="Close menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-nav">
              <a href="#home">
                <div className="navigation-mobile-link">
                  <span>HOME</span>
                </div>
              </a>
              <a href="#services">
                <div className="navigation-mobile-link">
                  <span>SERVICES</span>
                </div>
              </a>
              <a href="#gallery">
                <div className="navigation-mobile-link">
                  <span>GALLERY</span>
                </div>
              </a>
              <a href="#contact">
                <div className="navigation-mobile-link">
                  <span>CONTACT</span>
                </div>
              </a>
              <a href="#contact">
                <div className="accent navigation-mobile-link">
                  <span>GET A QUOTE</span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-footer">
              <span className="navigation-mobile-contact-label">
                DIRECT LINE
              </span>
              <a href="tel:623300447">
                <div className="navigation-mobile-phone">
                  <span>623-300-447</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-controls">
(function(){
  const nav = document.getElementById("mainNav")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const openBtn = document.getElementById("mobileMenuOpen")
  const closeBtn = document.getElementById("mobileMenuClose")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  function toggleMobileMenu(isOpen) {
    if (isOpen) {
      mobileOverlay.classList.add("is-open")
      openBtn.setAttribute("aria-expanded", "true")
      document.body.style.overflow = "hidden"
    } else {
      mobileOverlay.classList.remove("is-open")
      openBtn.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    }
  }

  if (openBtn) openBtn.addEventListener("click", () => toggleMobileMenu(true))
  if (closeBtn) closeBtn.addEventListener("click", () => toggleMobileMenu(false))

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu(false)
    })
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay && mobileOverlay.classList.contains("is-open")) {
      toggleMobileMenu(false)
    }
  })

  // Smooth-scroll all in-page anchor links with sticky-nav offset
  function smoothScrollToHash(hash) {
    if (!hash || hash === "#") return false
    const target = document.querySelector(hash)
    if (!target) return false
    const navHeight = nav ? nav.getBoundingClientRect().height : 0
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1
    window.scrollTo({ top: top, behavior: "smooth" })
    history.pushState(null, "", hash)
    return true
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href")
      if (href && href.length > 1) {
        if (smoothScrollToHash(href)) {
          e.preventDefault()
        }
      }
    })
  })

  // Scrolled-state class for nav (subtle shadow)
  window.addEventListener("scroll", () => {
    if (!nav) return
    if (window.scrollY > 20) {
      nav.classList.add("is-scrolled")
    } else {
      nav.classList.remove("is-scrolled")
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
