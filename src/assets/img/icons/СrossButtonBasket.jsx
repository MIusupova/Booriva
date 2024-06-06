import styles from "./../../../components/basket/BasketPage.module.sass";

const CrossButtonBasket = ({ isBasketOpen, setIsBasketOpen }) => {
  return (
    <svg
      className={
        styles.crossButtonBasket + " " + (isBasketOpen && styles.backdrop_open)
      }
      onClick={() => setIsBasketOpen(false)}
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
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M33.1855 12.7922L12.3903 32.7868"
        stroke="#1F1F1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12.7891 12.3918L32.7836 33.1871"
        stroke="#1F1F1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default CrossButtonBasket;
