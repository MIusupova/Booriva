import FooterLogo from "./footerLogo/FooterLogo";
import FooterInfos from "./footerInfos/FooterInfos";
import FooterOurAddress from "./footerOurAddress/FooterOurAddress";
import FooterNetworks from "./footerNetworks/FooterNetworks";
import FooterFeedback from "./footerFeedback/FooterFeedback";

import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerWrap}>
          <FooterLogo />
          <FooterInfos />
          <FooterOurAddress />
          <FooterNetworks />
          <FooterFeedback />
        </div>
      </div>
    </div>
  );
};

export default Footer;
