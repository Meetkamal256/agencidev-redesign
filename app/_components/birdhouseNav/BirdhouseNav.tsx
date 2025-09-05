"use client";
import styles from "./birdhouseNav.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <section className={styles.navbarContainer}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/agencydevLogo-2.png"
              alt="Agencidev Logo"
              layout="intrinsic"
              width={80}
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
      </section>
    </>
  );
};

export default Navbar;
