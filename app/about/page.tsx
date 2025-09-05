import Link from "next/link";
import styles from "./about.module.css";
import Image from "next/image";
import Footer from "../_components/section/Footer/Footer";
import Navbar from "../_components/section/Navbar/Navbar";

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <h1 className={styles.sectionHeading}>
        The home of Future-Focused Design.
      </h1>
      <p className={styles.sectionText}>
        We provide AI centred solutions for marketing, product development and
        brand strategy. Solving the tension between conversion and design, we
        help take agencies and info-products to the next level.
      </p>

      <div className={styles.aboutCards}>
        <div className={styles.card}>
          <h5>01</h5>
          <h4>AI-Driven Marketing Systems</h4>
          <p>
            We partner to develop marketing processes for the future. From
            building AI clones to create unlimited talking head content systems
            through to AI DM setting solutions that have brought in over 24,000+
            leads within days, our work delights, converts, and scales based on
            our clients needs.
          </p>
          <Link
            href="https://gamma.app/docs/Agencidev-System-e21o5ggwvuohwq6"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE OUR PROGRESS
          </Link>
        </div>
        <div className={styles.card}>
          <h5>02</h5>
          <h4>Product Development & Strategy</h4>
          <p>
            From concept to launch, we design and build scalable products
            tailored to market needs, ensuring innovation meets functionality
            and business goals.
          </p>
        </div>
      </div>
      
      <div className={styles.gridCards}>
        {[
          "/about-1.avif",
          "/about-6.gif",
          "/about-2.avif",
          "/about-3.avif",
          "/about-4.avif",
          "/about-5.avif",
        ].map((src, i) => (
          <div key={i} className={styles.gridImage}>
            <Image
              src={src}
              alt={`About image ${i + 1}`}
              fill
              style={{ objectFit: "cover" }} // maintain aspect ratio and cover container
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default About;
