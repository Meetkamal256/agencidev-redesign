"use client";

import React, { useState } from "react";
import styles from "./preview-video.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { div } from "framer-motion/client";
import Navbar from "../_components/section/Navbar/Navbar";

interface VideoItem {
  video: string;
  title: string;
  description: string;
}

const videoItems: VideoItem[] = [
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

const VideosPage = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  
  return (
    <div className="container">
      <Navbar />
      <div className={styles.previewContainer}>
        <div className={styles.grid}>
          {videoItems.map((video, idx) => (
            <div
              key={idx}
              className={styles.gridItem}
              onClick={() => setActiveVideo(video)}
            >
              <video
                src={video.video}
                muted
                loop
                playsInline
                className={styles.thumbnail}
              />
              <div className={styles.overlayText}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fullscreen Video Overlay with animation */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
            >
              <button
                className={styles.closeButton}
                onClick={() => setActiveVideo(null)}
              >
                <IoMdClose size={28} />
              </button>
              <motion.video
                key={activeVideo.video}
                src={activeVideo.video}
                autoPlay
                muted
                controls
                className={styles.fullscreenVideo}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideosPage;
