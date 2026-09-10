import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <Image
            src="/Prestron_logo2.png"
            alt=""
            width={28}
            height={28}
            className="site-footer__logo-img"
          />
          <nav className="site-footer__nav" aria-label="Footer">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/what-we-build">What We Build</Link></li>
              <li><Link href="/approach">Approach</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
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
