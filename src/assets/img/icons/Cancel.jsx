import styles from "./../../../components/basket/BasketPage.module.sass";

const Cancel = ({ setModalActive, active }) => {
  return (
    <svg
      className={active ? styles.modal + " " + styles.active : styles.modal}
      onClick={() => setModalActive(false)}
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <circle
        cx="23"
        cy="23"
        r="22"
        fill="#F40000"
        stroke="#F40000"
        strokeWidth="2"
      />
      <path
        d="M33.1855 12.7922L12.3903 32.7868"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12.7891 12.3918L32.7836 33.1871"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Cancel;
