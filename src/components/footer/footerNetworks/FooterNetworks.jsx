import styles from "./FooterNetworks.module.sass";
import Instagram from "../../../assets/img/icons/Instagram";
import Facebook from "../../../assets/img/icons/Facebook";

const FooterNetworks = () => {
  return (
    <div className={styles.footerNetworks}>
      <div className={styles.footerCommon}>СОЦ.СЕТИ</div>
      <div className={styles.footerLogoItems}>
        <div className={styles.footerLogoInst}>
          <Instagram />
        </div>
        <div className={styles.footerLogoFacebook}>
          <Facebook />
        </div>
      </div>
    </div>
  );
};

export default FooterNetworks;
