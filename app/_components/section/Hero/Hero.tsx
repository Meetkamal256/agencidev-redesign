"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./hero.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Slide {
  video: string;
  title: string;
  description: string;
}

const Hero = () => {
  const slides: Slide[] = [
    {
      video: "/agd-2.mp4",
      title: "Future-proofing agencies for the AI age",
      description:
        "From AI interfaces to agents to funnels to content strategy to creative direction to SaaS development to logo design, we build solutions for the future.",
    },
    {
      video: "/agd-3-3.mp4",
      title: "+$5K MRR in 4 months for AdEngine",
      description:
        "We deliver cutting-edge technology to solve modern challenges.",
    },
    {
      video: "/agd-4.mp4",
      title: "Podcast design strategy for Giulia Gierrieri",
      description:
        "From AI interfaces to agents to funnels to content strategy to creative direction to SaaS development to logo design, we build solutions for the future.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setVideoLoaded(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setVideoLoaded(false);
  };
  
  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    setVideoLoaded(false);
  };
  
  const router = useRouter();
  
  const handleVideoClick = () => {
    router.push("/preview-videos");
  };
  return (
    <section className={styles.heroContainer}>
      {/* Left Column */}
      <div className={styles.heroContent}>
        <h1>Agencidev: AI & Tech Solutions</h1>
        <p>
          Keeping agencies at the forefront of what&apos;s possible. At
          Agencidev, we seize this opportunity by keeping agencies at the
          forefront of what&apos;s possible with a range of services - including
          strategy, content, recruitment, service delivery and AI.
        </p>
        <Link
          href="https://tally.so/r/mZD1Az"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Get Started</button>
        </Link>
      </div>
      {/* Right Column: Video Carousel */}
      <div className={styles.heroVideo}>
        {/* Fallback background while video loads */}
        {!videoLoaded && <div className={styles.videoFallback}></div>}
        
        <AnimatePresence mode="wait">
          <motion.video
            key={currentIndex}
            src={slides[currentIndex].video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.video}
            onLoadedData={() => setVideoLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={handleVideoClick}
          />
        </AnimatePresence>
        
        {/* Overlay Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.overlayContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            onClick={handleVideoClick}
          >
            <h2 className={styles.overlayHeading}>
              {slides[currentIndex].title}
            </h2>
            <p className={styles.overlaySubtext}>
              {slides[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider Controls */}
        <div className={styles.controls}>
          <button onClick={handlePrev}>⟨</button>
          <button onClick={handleNext}>⟩</button>
        </div>
        
        {/* Pagination Indicators */}
        <div className={styles.indicators}>
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.indicator} ${
                idx === currentIndex ? styles.active : ""
              }`}
              onClick={() => handleIndicatorClick(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
