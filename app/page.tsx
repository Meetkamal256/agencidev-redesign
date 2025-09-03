import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "./_components/ThemeToggle/ThemeToggle";
import Navbar from "./_components/section/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <section>
       <h1 style={{ textAlign: "center", paddingTop: "40vh" }}>
          Hero Section
        </h1>
      </section>
      
      {/* Filler sections to enable scrolling */}
      <section style={{ height: "100vh", backgroundColor: "#e0e0e0" }}>
        <h2 style={{ textAlign: "center", paddingTop: "40vh" }}>About Section</h2>
      </section>
      <section style={{ height: "100vh", backgroundColor: "#c0c0c0" }}>
        <h2 style={{ textAlign: "center", paddingTop: "40vh" }}>Portfolio Section</h2>
      </section>
      <section style={{ height: "100vh", backgroundColor: "#a0a0a0" }}>
        <h2 style={{ textAlign: "center", paddingTop: "40vh" }}>FAQ Section</h2>
      </section>
    </>
  );
}
