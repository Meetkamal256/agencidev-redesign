import Link from "next/link";
import Footer from "../_components/section/Footer/Footer";
import styles from "./portfolio.module.css";
import Image from "next/image";
import Navbar from "../_components/section/Navbar/Navbar";

const page = () => {
  return (
    <div className="container">
      <Navbar />
      <h1 className={styles.sectionHeading}>
        We are an AI product design & build agency.
      </h1>
      <p className={styles.sectionText}>
        AI is shaping the future of business, driving innovation through
        personalised, purpose-built experiences. To succeed in this new era,
        agencies must go beyond utility and focus on creating companies that
        resonate with their clients deeper aspirations. Here is some of our work
        and ideas…
      </p>

      <div className={styles.portfolioCards}>
        <div>
          <Link href="/birdhouseAi">
            <Image
              src="/birdhouseAI.avif"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>

        <div>
          <Link href="">
            <Image
              src="/systemGrown.avif"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
