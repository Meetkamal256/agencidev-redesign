import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4>© 2025 Agencidev Enterprises Ltd.</h4>
      <p>
        This website is operated and maintained by Agencidev Enterprises Ltd.
        Agencidev Enterprises Ltd is a sales and marketing company. We do not
        sell a business opportunity, “get rich quick” programme. All material is
        intellectual property and protected by copyright. Any duplication,
        reproduction, or distribution is strictly prohibited.
      </p>
      <p>
        Investing of any kind carries risk and it is possible to lose some or
        all of your money. Results vary, are not typical, and rely on individual
        effort, time, and skill, as well as unknown conditions and other
        factors. We do not measure earnings or financial performance. Instead,
        we track completed transactions and satisfaction of services by
        voluntary surveys.
      </p>
      <p>
        The Company may link to content or refer to content and/or services
        created by or provided by third parties that are not affiliated with the
        Company. The Company is not responsible for such content and does not
        endorse or approve it. The Company may provide services by or refer you
        to third-party businesses. Some of these businesses have common interest
        and ownership with the Company.
      </p>
      <p>
        This site is not a part of the YouTube, Bing Google or Facebook website;
        Google Inc, Microsoft INC or Meta Inc. Additionally, This site is NOT
        endorsed by YouTube, Google, Bing or Facebook in any way. FACEBOOK is a
        trademark of FACEBOOK, Inc. YOUTUBE is a trademark of GOOGLE Inc. BING
        is a trademark of MICROSOFT Inc.
      </p>
      <p>Privacy Policy | Terms of Service</p>
      <Link href="/" className={styles.logoContainer}>
        <Image src="/footer-logo.png" alt="footerLogo" width={60} height={80} className={styles.footerLogo} />
      </Link>
    </div>
  );
};

export default Footer;
