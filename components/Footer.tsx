import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <p className="site-footer__logo">PRESTRON</p>
          <nav className="site-footer__nav" aria-label="Footer">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/what-we-build">What We Build</Link></li>
              <li><Link href="/approach">Approach</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="site-footer__contact">
            <a
              className="font-mono"
              style={{ color: "var(--color-dusk-blue)" }}
              href="mailto:contact@prestron.com"
            >
              contact@prestron.com
            </a>
          </div>
        </div>
        <div className="site-footer__bottom-bar">
          <span className="font-mono">Prestron · Kampala, Uganda</span>
          <span className="font-mono">© 2026 Prestron</span>
        </div>
      </div>
    </footer>
  );
}
