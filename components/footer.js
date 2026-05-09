import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-industrial">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand footer-column">
                <div className="footer-brand-row">
                  <img
                    src="/phx-logo.png"
                    alt="PHX Junk Removal logo"
                    className="footer-brand-logo"
                  />
                  <h2 className="footer-logo section-title">
                    PHX JUNK REMOVAL
                  </h2>
                </div>
                <p className="footer-mission section-content">
                  Arizona&apos;s trusted junk removal team. Commercial and
                  residential. Fast, thorough cleanouts with same-day options when
                  available. Licensed and insured.
                </p>
              </div>
              <div className="footer-column footer-contact">
                <h3 className="footer-heading">CONTACT US</h3>
                <div className="footer-contact-info">
                  <a href="tel:623300447">
                    <div className="footer-phone-link">
                      <span className="footer-icon-wrapper">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
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
                      <span>623-300-447</span>
                    </div>
                  </a>
                  <a href="mailto:info@ropersconcrete.com">
                    <div className="footer-email-link">
                      <span className="footer-icon-wrapper">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="M22 6L12 13L2 6"></path>
                          </g>
                        </svg>
                      </span>
                      <span>info@ropersconcrete.com</span>
                    </div>
                  </a>
                  <div className="footer-address">
                    <span className="footer-icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </span>
                    <p className="section-content footer-address-text">
                      Serving Greater Phoenix &amp; Surrounding Communities (623)
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-column footer-nav">
                <h3 className="footer-heading">NAVIGATION</h3>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#home">
                      <div className="footer-nav-link">
                        <span className="footer-nav-icon">
                          <svg
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7l-7 7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>HOME</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#services">
                      <div className="footer-nav-link">
                        <span className="footer-nav-icon">
                          <svg
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7l-7 7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>SERVICES</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#gallery">
                      <div className="footer-nav-link">
                        <span className="footer-nav-icon">
                          <svg
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7l-7 7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>GALLERY</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#contact">
                      <div className="footer-nav-link footer-cta-link">
                        <span className="footer-nav-icon">
                          <svg
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7l-7 7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>GET A QUOTE</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-legal">
                <p>
                  © 2026 PHX Junk Removal. All Rights Reserved. Licensed,
                  Bonded &amp; Insured.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
