"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { CiMenuFries } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect desktop vs mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll effect only on desktop
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  return (
    <div
      className={`${styles.navbarContainer} ${
        scrolled && isDesktop ? styles.scrolled : ""
      }`}
    >
      <div
        className={`${styles.logoWrapper} ${
          scrolled && isDesktop ? styles.scrolled : ""
        }`}
      >
        <Link href="/">
          <Image
            src="/agencydevLogo-2.png"
            alt="Agencidev Logo"
            layout="intrinsic"
            width={isDesktop ? (scrolled ? 150 : 600) : 150}
            height={isDesktop ? (scrolled ? 50 : 200) : 50}
            className={styles.logo}
          />
        </Link>
      </div>

      <ul
        className={`${styles.navLinks} ${
          mobileMenuOpen ? styles.mobileActive : ""
        }`}
      >
        <Link href="/">
          <li onClick={() => setMobileMenuOpen(false)}>[Home]</li>
        </Link>
        <Link href="/about">
          <li onClick={() => setMobileMenuOpen(false)}>[About]</li>
        </Link>
        <Link href="/portfolio">
          <li onClick={() => setMobileMenuOpen(false)}>[Portfolio]</li>
        </Link>
        <Link href="/faq">
          <li onClick={() => setMobileMenuOpen(false)}>[FAQ]</li>
        </Link>
        <Link href="/careers">
          <li onClick={() => setMobileMenuOpen(false)}>[Careers]</li>
        </Link>
        <Link href="/contact">
          <li onClick={() => setMobileMenuOpen(false)}>[Portfolio]</li>
        </Link>
      </ul>

      <ThemeToggle />

      <div
        className={styles.hamburger}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <IoMdClose size={28} /> : <CiMenuFries size={28} />}
      </div>
    </div>
  );
};

export default Navbar;
