"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={styles.toggleBtn}
    >
      {theme === "light" ? (
        <FaMoon className={styles.icon} />
      ) : (
        <FaSun className={styles.icon} />
      )}
    </button>
  );
};

export default ThemeToggle;
