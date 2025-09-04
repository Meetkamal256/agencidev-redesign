"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.navbarContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div
        className={`${styles.logoWrapper} ${scrolled ? styles.scrolled : ""}`}
      >
        <Image
          src="/agencydevLogo-2.png"
          alt="Agencidev Logo"
          layout="intrinsic"
          width={scrolled ? 150 : 600}
          height={scrolled ? 50 : 200}
          className={styles.logo}
        />
      </div>
      <div>
        <ul
          className={`${styles.navLinks} ${
            mobileMenuOpen ? styles.mobileActive : ""
          }`}
        >
          <li onClick={() => setMobileMenuOpen(false)}>Home</li>
          <li onClick={() => setMobileMenuOpen(false)}>About</li>
          <li onClick={() => setMobileMenuOpen(false)}>Portfolio</li>
          <li onClick={() => setMobileMenuOpen(false)}>FAQ</li>
          <li onClick={() => setMobileMenuOpen(false)}>Careers</li>
          <li onClick={() => setMobileMenuOpen(false)}>Contact</li>
        </ul>
      </div>
      <ThemeToggle />
      <div
        className={styles.hamburger}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <CiMenuFries size={28} />
      </div>
    </div>
  );
};

export default Navbar;
