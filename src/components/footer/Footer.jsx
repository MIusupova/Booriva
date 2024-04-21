import styles from "./Footer.module.sass";
import Booriva from "../../assets/img/icons/Booriva";
import Instagram from "../../assets/img/icons/Instagram";
import Facebook from "../../assets/img/icons/Facebook";
import girl from "../../assets/img/images/girl.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerWrap}>
          <div className={styles.footerLogoBooriva}>
            <Booriva />
          </div>
          <div className={styles.footerInfos}>
            <div className={styles.footerInfo}>ИНФО</div>
            <div className={styles.footerDataIitems}>
              <div className={styles.footerDataIitemContact}>Контакты</div>
              <div className={styles.footerDataIitem}>Система лояльности</div>
              <div className={styles.footerDataIitem}>Обмен и возврат</div>
              <div className={styles.footerDataIitem}>Доставка и оплата</div>
              <div className={styles.footerLogoItemsBlocks}>
                <div className={styles.footerLogoInst}>
                  <Instagram />
                </div>
                <div className={styles.footerLogoFacebook}>
                  <Facebook />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerOurAddress}>
            <div className={styles.footerCommon}>НАШ АДРЕС</div>
            <div className={styles.footerContacts}>КОНТАКТЫ</div>
            <div className={styles.footerAddressItems}>
              <p className={styles.footerAddressItem}>г.Грозный, ул. Мадаева</p>
              <p className={styles.footerAddressItem}>
                Пн — Вс: с 11:00 до 21:00
              </p>
              <p className={styles.footerNumberItem}>+7 999 999 99 00</p>
            </div>
          </div>
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
          <div className={styles.footerFeedback}>
            <div className={styles.footerFeedbackDisp}>
              <div className={styles.footerFeedbackGirl}>
                <img src={girl} />
              </div>
              <div className={styles.footerFeedbackWrap}>
                <div className={styles.footerFeedbackText}>
                  Нам важно знать, что ты думаешь про нас! Просто напиши мне!
                </div>
                <div className={styles.footerFeedbackLink}>
                  <a href="#">Написать Иванке</a>
                  <div className={styles.footerFeedbackLine}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
