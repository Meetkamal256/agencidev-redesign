import React from "react";
import BirdhouseNav from "../_components/birdhouseNav/BirdhouseNav";
import styles from "./birdhouseAi.module.css";import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <BirdhouseNav />
      <section className={styles.birdHouseContainer}>
        <div className={styles.topWrapper}>
          <h4>IDEAS POST</h4>
          <h1 className={styles.sectionHeading}>
            The Birdhouse AI: The Future of AI Content
          </h1>
          <p className={styles.subText}>
            In our community ideation sessions, we explore how the latest trends
            can create out-of-the-box ideas for our favourite agencies. This
            week, we&apos;re focusing on The Birdhouse. Let&apos;s dive in.
          </p>
          <p className={styles.date}>By Agencidev | 2.05.2025</p>

          <div>
            <video
              src="/birdhouseAI-gif-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className={styles.video}
            ></video>
          </div>
          <div></div>
          <h3 className={styles.graphTitle}>01 THE CONTENT FLOOD</h3>
          <p className={styles.graphText}>
            AI is making content creation easier, pushing content output towards
            infinity.
          </p>
          <div>
            <div>
              <video
                src="/graph-1.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={styles.video}
              ></video>
              <p className={styles.subText}>
                But as content becomes easier for anyone to make using AI, the
                value of each new piece tends to diminish, making the worth of
                content approach zero, unable to turn viewers into cash.
              </p>
            </div>
          </div>

          <video
            src="/graph-2.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.video}
          ></video>

          <h3 className={styles.graphTitle}>02 AI&apos;S COMPETETIVE EDGE</h3>
          <p className={styles.graphText}>
            Though general AI tools lack the creative ability to write viral
            content that sells, without expert prompting, AI has the competitive
            edge of speed.
          </p>
          <p className={styles.text}>
            What happens when AI is built specifically for creating viral posts
            on 𝕏 that sell?
          </p>
        </div>
        
        <div className={styles.birdShowcase}>
          <div className={styles.logoContainer}>
            <Image src="/birdboxLogo.png" alt="" width={50} height={50} />
          </div>
          <h1 className={styles.sectionHeadingTwo}>Introducing Birdbox.</h1>
          <p className={styles.subTextTwo}>
            An 𝕏 focused content AI tool built on the best writing frameworks,
            where users can generate posts from ideas as well as remix content
            from other creators.
          </p>
          
          <div className={styles.imageWrapper}>
            <Image
              src="/birdbox.avif"
              alt="Birdbox preview"
              fill
              className={styles.image}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
            />
          </div>
          
          <div className={styles.grid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/phone-1.avif"
                alt="Birdbox preview"
                fill
                className={styles.image}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              />
            </div>
            <div>
              <h1 className={styles.sectionHeading}>
                The Birdhouse AI: The Future of AI Content
              </h1>
              <p className={styles.subText}>
                In our community ideation sessions, we explore how the latest
                trends can create out-of-the-box ideas for our favourite
                agencies. This week, we&apos;re focusing on The Birdhouse.
                Let&apos;s dive in.
              </p>
            </div>
          </div>
          
          <div className={styles.grid}>
            <div>
              <h1 className={styles.sectionHeading}>Industry Watchlists</h1>
              <p className={styles.subText}>
                Users can create watchlists to keep an eye out for inspiration
                from other creators. Posts from other creators can then be
                remixed.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/watchlist.avif"
                alt="Birdbox preview"
                fill
                className={styles.image}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              />
            </div>
          </div>
          
          <h1 className={styles.sectionHeading}>Industry Watchlists</h1>
          <p className={styles.subText}>
            Users can create watchlists to keep an eye out for inspiration from
            other creators. Posts from other creators can then be remixed.
          </p>
          <div className={styles.gridTwo}>
            <div className={styles.imageWrapper}>
              <Image
                src="/remix-1.avif"
                alt="preview"
                fill
                className={styles.image}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/remix-2.avif"
                alt="Birdbox preview"
                fill
                className={styles.image}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/remix-3.avif"
                alt="Birdbox preview"
                fill
                className={styles.image}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              />
            </div>
          </div>
        </div>
        <h1 className={styles.sectionHeading}>
          What if all this was a reality?
        </h1>
        <p className={styles.subText}>
          In a world flooded with AI-generated content and with AI content
          generation tools on the rise, it could be.
        </p>
        <h1 className={styles.sectionHeading}>
          We believe that digital businesses are the future.
        </h1>
        <p className={styles.subText}>
          From AI interfaces to agents to funnels to content strategy to
          creative direction to SaaS development to logo design, we build
          solutions for the future. Our mission is to build great agencies.
        </p>
        <Link href="https://tally.so/r/mZD1Az">
          <button className={styles.contactBtn}>Contact US</button>
        </Link>
        
        <p className={styles.copyright}>© 2025 Agencidev Enterprises Ltd.</p>
      </section>
    </>
  );
};

export default page;
