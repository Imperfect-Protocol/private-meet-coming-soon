"use client";

import { useState } from "react";
import SiteNav from "../SiteNav";
import DemoDisclaimerFooter from "../DemoDisclaimerFooter";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const emailText = "imperfect-protocol@protonmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <main className="contact-page">
      <img className="contact-page__image" src="/table.jpg" alt="" />
      <div className="contact-page__shade" />
      <SiteNav />

      <section className="contact-page__shell">
        <section className="contact-band" id="contact">
          <p className="section-label">Contact</p>
          <h2>Contact Our Team</h2>
          <div className="email-row">
            <span>Send us email to:</span>
            <div className="email-container">
              <code className="email__code">
                {emailText}
              </code>
              <button
                type="button"
                className="copy-icon-btn"
                onClick={handleCopy}
                aria-label="Copy email address"
                title="Copy email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
              <span className={`copy-feedback ${copied ? "visible" : ""}`}>Copied!</span>
            </div>
          </div>
          <div>
            or visit our {" "}
            <a
              href="https://github.com/Imperfect-Protocol/private-meet"
              rel="noreferrer"
              target="_blank"
            >
              Private Meet repository on GitHub
            </a>
          </div>
        </section>

        <DemoDisclaimerFooter />
      </section>
    </main>
  );
}