  "use client";

  import React, { useState } from "react";
  import styles from "./preview-video.module.css";

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
      <div className={styles.container}>
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
        
        {/* Fullscreen Video Overlay */}
        {activeVideo && (
          <div className={styles.overlay} onClick={() => setActiveVideo(null)}>
            <video
              src={activeVideo.video}
              autoPlay
              muted
              controls
              className={styles.fullscreenVideo}
            />
          </div>
        )}
      </div>
    );
  };

  export default VideosPage;
