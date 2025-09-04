"use client";
import styles from "./birdhouseNav.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image
            src="/agencydevLogo-2.png"
            alt="Agencidev Logo"
            layout="intrinsic"
            width={150}
            height={50}
            className={styles.logo}
          />
        </Link>
      </div>
      
      <ul>
        <Link href="/">
          <li>AgenciDev</li>
        </Link>
      </ul>
      
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
