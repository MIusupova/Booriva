import styles from "./FooterOurAddress.module.sass";

const FooterOurAddress = () => {
  return (
    <div className={styles.footerOurAddress}>
      <div className={styles.footerCommon}>НАШ АДРЕС</div>
      <div className={styles.footerContacts}>КОНТАКТЫ</div>
      <div className={styles.footerAddressItems}>
        <p className={styles.footerAddressItem}>г.Грозный, ул. Мадаева</p>
        <p className={styles.footerAddressItem}>Пн — Вс: с 11:00 до 21:00</p>
        <p className={styles.footerNumberItem}>+7 999 999 99 00</p>
      </div>
    </div>
  );
};

export default FooterOurAddress;
