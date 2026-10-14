"use client";

import { useEffect, useState } from "react";
import { PRIVATE_POKER_DEMO_DISCLAIMER } from "./constants";

export default function SplashScreen({ onDone }) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [fadeLogo, setFadeLogo] = useState(false);
  const [fadeDisclaimer, setFadeDisclaimer] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);

  useEffect(() => {
    const showDisclaimerTimer = window.setTimeout(() => setShowDisclaimer(true), 500);
    const fadeLogoTimer = window.setTimeout(() => setFadeLogo(true), 2000);
    const doneTimer = window.setTimeout(() => onDone?.(), 3250);

    return () => {
      window.clearTimeout(showDisclaimerTimer);
      window.clearTimeout(fadeLogoTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const disclaimerClassName = [
    "splash__disclaimer",
    showDisclaimer ? "splash__disclaimer--show" : "",
    fadeDisclaimer ? "splash__disclaimer--fade" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="splash">
      <img className="splash__image" src="splash.jpg" alt="" />
      <div className="splash__wash" />
      <div className={`splash__content ${fadeLogo ? "splash__content--fade" : ""}`}>
        <p className="kicker"></p>
        <h1>Private Meet</h1>
        <div className="splash__rule" />
        <p className="splash__status">by Imperfect Protocol</p>
      </div>
      <p className={disclaimerClassName}>{PRIVATE_POKER_DEMO_DISCLAIMER}</p>
    </section>
  );
}
