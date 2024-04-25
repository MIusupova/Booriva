import styles from "./../../../components/header/basket/Basket.module.sass";
const BasketIcon = () => {
  return (
    <div className={styles.basketIcon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.05089 8.91976C4.071 8.66916 4.18477 8.43533 4.36953 8.26484C4.55429 8.09435 4.79649 7.9997 5.04789 7.99976H18.9519C19.2033 7.9997 19.4455 8.09435 19.6303 8.26484C19.815 8.43533 19.9288 8.66916 19.9489 8.91976L20.8259 19.8398C20.848 20.1149 20.8129 20.3917 20.7227 20.6527C20.6326 20.9136 20.4894 21.1531 20.3022 21.356C20.115 21.5589 19.8878 21.7209 19.6349 21.8316C19.382 21.9424 19.109 21.9997 18.8329 21.9998H5.16689C4.89081 21.9997 4.61774 21.9424 4.36487 21.8316C4.112 21.7209 3.8848 21.5589 3.69759 21.356C3.51037 21.1531 3.36719 20.9136 3.27706 20.6527C3.18693 20.3917 3.1518 20.1149 3.17389 19.8398L4.04989 8.91976H4.05089Z"
          stroke="#1F1F1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 10.9998V5.99976C16 4.93889 15.5786 3.92147 14.8284 3.17133C14.0783 2.42118 13.0609 1.99976 12 1.99976C10.9391 1.99976 9.92172 2.42118 9.17157 3.17133C8.42143 3.92147 8 4.93889 8 5.99976V10.9998"
          stroke="#1F1F1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default BasketIcon;
