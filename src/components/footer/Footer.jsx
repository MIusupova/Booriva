import styles from "./Footer.module.sass";
import FooterLogo from "./footerLogo/FooterLogo";
import FooterInfos from "./footerInfos/FooterInfos";
import FooterOurAddress from "./footerOurAddress/FooterOurAddress";
import FooterNetworks from "./footerNetworks/FooterNetworks";
import FooterFeedback from "./footerFeedback/FooterFeedback";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrap + " wrapper"}>
        <FooterLogo />
        <FooterInfos />
        <FooterOurAddress />
        <FooterNetworks />
        <FooterFeedback />
      </div>
    </div>
  );
};

export default Footer;
