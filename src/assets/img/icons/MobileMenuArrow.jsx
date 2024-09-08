import styles from "./../../../components/mobileMenu/MobileMenu.module.sass";

const MobileMenuArrow = () => {
  return (
    <svg
      className={styles.mobileMenuArrow}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 13.375L14 19.625L23 29L29 4L2 14.9375L8 18.0625L11 27.4375L13.25 24.3125"
        stroke="#FDA3C4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MobileMenuArrow;
