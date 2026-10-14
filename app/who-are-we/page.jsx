import Link from "next/link";
import SiteNav from "../SiteNav";
import DemoDisclaimerFooter from "../DemoDisclaimerFooter";

const builderNotes = [
  {
    title: "Games came first",
    copy:
      "Sonia began by building tools for game teams: C++ frameworks, graphics layers, GUI systems, scripting bridges, and the kind of reusable foundations that let other developers ship actual games. That early work shaped a lasting instinct: make difficult systems understandable enough for people to build with them."
  },
  {
    title: "Poker was never just a theme",
    copy:
      "Later, in online meet, she designed a simulated-player system that could drive huge test tournaments and help engineers stress real meet servers. Years after that, she worked again with live meet hand data, parsing and analysing game streams. Private Meet is not a random detour; it sits on a long-running fascination with cards, fairness, testing, and hidden state."
  },
  {
    title: "Performance under pressure",
    copy:
      "In high-frequency trading she worked on FPGA-backed trading systems, risk controls, low-latency paths, reconciliation, and live analysis. That world has very little patience for hand-waving: correctness, latency, failure modes, and operational clarity all matter at once."
  },
  {
    title: "Security and systems work",
    copy:
      "Her later systems work moved through Windows endpoint protection, browser security, ARM64 platform constraints, WebAssembly runtimes, POSIX compatibility, Rust, C++, and runtime integration. These are the kinds of environments where small details become real bugs, and where architecture has to survive contact with the machine."
  },
  {
    title: "Blockchain as engineering material",
    copy:
      "Before Private Meet, Sonia worked as a CTO and protocol engineer on Arbitrum-based smart-contract systems, including Rust Stylus contracts, upgrade patterns, access control, and liquidity-aware on-chain allocation. Private Meet grew from that same practical question: what should be on-chain, what should stay peer-to-peer, and how do we make the result usable?"
  },
  {
    title: "A creative engineer",
    copy:
      "The thread through all of this is not one industry, but a character: curiosity, stubbornness, and a taste for building the missing layer. Sonia has written graphics engines, meet robots, trading infrastructure, endpoint protection, WebAssembly runtime pieces, smart contracts, and cryptographic game protocols. Private Meet is where those lives meet."
  }
];

export const metadata = {
  title: "Who Are We? | Private Meet",
  description: "The builders behind Private Meet by Imperfect Protocol."
};

export default function WhoAreWePage() {
  return (
    <main className="builder-page">
      {/* <img className="builder-page__image" src="/table.jpg" alt="" />
      <div className="builder-page__shade" /> */}
      <img className="splash__image" src="splash.jpg" alt="" />
      <SiteNav />

      <section className="builder-shell">
        <div className="builder-hero">
          <p className="section-label">Who are we?</p>
          <h1>We are the builders</h1>
          <span>
            Private Meet by Imperfect Protocol is led by Sonia: systems
            engineer, protocol designer, and founder who has spent more than two
            decades turning strange, hard technical problems into working
            software.
          </span>
        </div>

        <section className="builder-story">
          <p>
            Sonia's career has moved through places that look unrelated at
            first glance: PC games, online meet, financial trading, computer
            graphics, cloud workflow systems, endpoint protection, WebAssembly,
            and blockchain protocols. The common pattern is hidden machinery.
            She is drawn to systems where there is a lot happening below the
            surface, where correctness matters, and where the best interface is
            the one that lets other people do difficult work without having to
            hold the whole machine in their head.
          </p>
          <p>
            Private Meet comes from that same place. It is not just a meet
            skin on top of crypto. It is an attempt to make Mental Poker feel
            real: peer-to-peer gameplay, cryptographic card protection,
            verifiable fairness, and blockchain settlement arranged into
            something people can actually use.
          </p>
        </section>

        <section className="builder-notes" aria-label="Builder background">
          {builderNotes.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>

        <section className="builder-closing">
          <p className="section-label">Why it matters</p>
          <h2>Private Meet is built by someone who likes the hard parts.</h2>
          <span>
            The project combines old Mental Poker ideas with modern peer
            networking, BLS cryptography, Arbitrum contracts, and a product
            instinct shaped by games, trading systems, and security engineering.
          </span>
        </section>
        <DemoDisclaimerFooter />
      </section>
    </main>
  );
}
