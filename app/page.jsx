import SiteNav from "./SiteNav";
import DemoDisclaimerFooter from "./DemoDisclaimerFooter";

const heroSignals = ["Peer-to-Peer", "Encrypted Video", "Ice Breaker Games", "Zero-Trust"];

export default function Home() {
  return (
    <main className="site-shell">
      <SiteNav />
      <section className="welcome">
        <img className="splash__image" src="splash.jpg" alt="" />
        <div className="welcome__hero">
          <div className="welcome__copy">
            <h1>Private&nbsp;Meet Peer&nbsp;To&nbsp;Peer Video&nbsp;Calls</h1>
            <p className="lead">
              Secure video rooms powered by P2P technology. Built-in casual games act as the ultimate ice breaker to spark laughter and connection.
            </p>
            <div className="hero-signals">
              {heroSignals.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="contact-actions contact-actions--right">
              <a
                className="contact-button"
                href="https://privatebooking.imperfectprotocol.ie/book/imperfectprotocol-dbbbb9"
                target="_blank"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>

        <div className="content-band">
          <section className="intro">
            <p className="section-label">The Idea</p>
            <h2>Video calls made&nbsp;genuinely fun</h2>
            <p>
              Private Meet combines private, direct video streaming with lightweight ice breaker games. 
              Turn awkward silence into shared fun without relying on corporate cloud servers.
            </p>
          </section>

          <section className="protocol">
            <div className="section-heading">
              <p className="section-label">How it works</p>
              <h2>Simple Secure and Playful</h2>
            </div>
            <div className="protocol__steps">
              <article>
                <strong>01</strong>
                <h3>Open Room</h3>
                <p>Start a secure direct link with zero central tracking.</p>
              </article>
              <article>
                <strong>02</strong>
                <h3>Break the Ice</h3>
                <p>Launch a quick, built-in game instantly to get everyone talking.</p>
              </article>
              <article>
                <strong>03</strong>
                <h3>Connect Freely</h3>
                <p>Enjoy smooth, encrypted peer-to-peer video with the people who matter.</p>
              </article>
            </div>
          </section>
        </div>
      </section>
      <DemoDisclaimerFooter />
    </main>
  );
}