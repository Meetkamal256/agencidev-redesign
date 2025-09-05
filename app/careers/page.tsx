import BirdhouseNav from "../_components/birdhouseNav/BirdhouseNav";
import styles from "./careers.module.css";
import Link from "next/link";
import { jobs } from "../data";
import Footer from "../_components/section/Footer/Footer";

const Page = () => {
  
    return (
      <>
        <BirdhouseNav />
        <section className={styles.careersSection}>
          <div className={styles.careersContent}>
            <h1>Join the team.</h1>
            <p>Our mission is simple—to build great agencies.</p>

            <p>
              This company is not for the feint of heart. We don&apos;t want
              people who are just looking for a salary. We want people who seek
              work that excites them. We want people who despise mediocrity.
              There are times where we shall be overworked and underpaid. But we
              are building something great. To cook better than any chef has
              cooked before.
            </p>

            <blockquote>
              Only first class business, and that in a first class way.
            </blockquote>

            <h2>Our Company Values</h2>
            <p>
              These values aren&apos;t just for show or reports. Each one of
              these acts as a lens that we look at life through. At this
              company, we&apos;re focused on building cool things with cool
              people (an embodiment of our third value).
            </p>

            <ul className={styles.valuesList}>
              <li>
                1. We admire people who work hard. We dislike people who don’t
                pull their weight in the boat.
              </li>
              <li>
                2. We admire people with honesty—who say things as they are.
              </li>
              <li>
                3. We admire people who work with gusto. If you don’t enjoy what
                you’re doing, we beg you to find another job.
              </li>
              <li>4. We admire people who don’t suck up to their bosses.</li>
              <li>
                5. We admire people who hire people good enough to surpass them.
                We dislike people who are so insecure that they want everyone
                else to be incompetent.
              </li>
              <li>
                6. We admire people with manners who treat other people like
                people.
              </li>
              <li>
                7. We admire people who desire to build themselves into
                formidable opponents.
              </li>
              <li>
                8. We admire people who do the hard work, even when they don’t
                feel like it.
              </li>
              <li>
                9. We admire people who hold themselves to ridiculously high
                standards.
              </li>
              <li>
                10. We admire people who handle brutal facts and uncomfortable
                truths, as disgusting as they may be.
              </li>
              <li>
                11. We admire people who focus on producing truly great work. No
                company gets rich by underpaying their employees.
              </li>
              <li>
                12. We admire people who are ready to argue with the teachers
                when they know they are right.
              </li>
              <li>
                13. We admire people who work to be the best—people who aim to
                hit home runs each time, no matter what it may cost in agony and
                overtime.
              </li>
            </ul>
          </div>

          <div className={styles.jobsSection}>
            <h2>Open Roles</h2>
            {jobs.map((job, index) => (
              <div key={index} className={styles.jobCard}>
                <h3>{job.title}</h3>
                <p className={styles.jobDescription}>{job.description}</p>
                <p className={styles.jobLocation}>{job.location}</p>
                <Link
                  href="#"
                >
                  <button className={styles.learnMoreBtn}>Learn More</button>
                </Link>
              </div>
            ))}
                </div>
                <Footer />
        </section>
      </>
    );
};

export default Page;
