import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "./_components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />

      <div className={styles.home}>
        <h1 className={styles.heading}>Next.js Dark mode tutorial</h1>
        <p className={styles.subText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, iure.
          Impedit, explicabo dignissimos necessitatibus tenetur voluptates
          molestias exercitationem nobis autem officia dolorum fugit porro vitae
          ducimus beatae laborum aperiam recusandae.
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.btnPrimary}>Button 1</button>
          <button className={styles.btnSecondary}>Button 2</button>
        </div>
      </div>
    </>
  );
}
