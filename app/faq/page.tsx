"use client";

import { useState } from "react";
import styles from "./faq.module.css";
import { faqs } from "../data";
import Footer from "../_components/section/Footer/Footer";
import Navbar from "../_components/section/Navbar/Navbar";

type FAQ = {
  question: string;
  answer: string;
};

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="container">
      <Navbar />
      <div className={styles.faqSection}>
        <h1 className={styles.sectionHeading}>
          We believe that digital businesses are the future.
        </h1>
        
        <div className={styles.buttonWrapper}>
          <button className={styles.auditButton}>Free Audit</button>
        </div>
        
        <h2 className={styles.subHeading}>Frequently Answered Questions</h2>
        
        <div className={styles.faqContainer}>
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
