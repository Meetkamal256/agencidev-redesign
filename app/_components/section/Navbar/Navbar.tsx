"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
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
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>FAQ</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
