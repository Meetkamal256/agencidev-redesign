import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "./_components/ThemeToggle/ThemeToggle";
import Navbar from "./_components/section/Navbar/Navbar";
import Hero from "./_components/section/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
