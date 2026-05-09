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
                    alt="AZ Quality Transmissions logo"
                    className="footer-brand-logo"
                  />
                  <h2 className="footer-logo section-title">
                    AZ QUALITY TRANSMISSIONS
                  </h2>
                </div>
                <p className="footer-mission section-content">
                  Family-owned Transmission &amp; Auto Repair in Glendale. Free basic
                  diagnostics, complimentary towing within 10 miles on major repairs,
                  and a 2-year unlimited mileage warranty.
                </p>
              </div>
              <div className="footer-column footer-contact">
                <h3 className="footer-heading">CONTACT US</h3>
                <div className="footer-contact-info">
                  <a href="tel:6232813331">
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
                      <span>(623) 281-3331</span>
                    </div>
                  </a>
                  <a href="https://maps.google.com/?q=5600+Grand+Ave,+Glendale,+AZ+85301">
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
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle r="3" cx="12" cy="10"></circle>
                          </g>
                        </svg>
                      </span>
                      <span>5600 Grand Ave, Glendale, AZ 85301</span>
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </g>
                      </svg>
                    </span>
                    <p className="section-content footer-address-text">
                      Mon–Fri 8am–5pm · Sat 8am–3pm · Sun Closed
                    </p>
                  </div>
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
                      Service area: Glendale, Peoria, El Mirage, Sun City West,
                      Scottsdale, Phoenix, Avondale
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
                  © 2026 AZ Quality Transmissions. All Rights Reserved. Licensed,
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
