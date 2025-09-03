import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "./_components/ThemeToggle/ThemeToggle";
import Navbar from "./_components/section/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
    </>
  );
}
