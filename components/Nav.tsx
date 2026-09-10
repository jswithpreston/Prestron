"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import posthog from "posthog-js";

const links = [
  { href: "/", label: "Home" },
  { href: "/what-we-build", label: "What We Build" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [isOpen]);

  const handleNavClick = (label: string) => {
    posthog.capture("nav_link_clicked", { page: label });
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="logo">
          PRESTRON
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="nav-toggle__icon" aria-hidden="true" />
        </button>
        <nav
          id="main-nav"
          ref={navRef}
          className="main-nav"
          aria-label="Main"
        >
          <ul className="main-nav__list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => handleNavClick(link.label)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
