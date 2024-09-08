import styles from "./../../../components/searchProduct/SearchProduct.module.sass";
const SearchBtn = ({ setValue }) => {
  return (
    <svg
      onClick={() => setValue("")}
      className={styles.searchBtn}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#F40000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.06992 6.15349C6.87859 5.95438 6.56215 5.94817 6.36314 6.13962C6.16414 6.33106 6.15792 6.64767 6.34926 6.84678L11.2829 11.9807L6.15342 16.9153C5.95441 17.1068 5.9482 17.4234 6.13954 17.6225C6.33088 17.8216 6.64731 17.8278 6.84632 17.6363L11.9758 12.7017L16.9135 17.8399C17.1049 18.0391 17.4213 18.0453 17.6203 17.8538C17.8193 17.6624 17.8255 17.3458 17.6342 17.1467L12.6965 12.0085L17.8336 7.06646C18.0326 6.87502 18.0389 6.55841 17.8475 6.3593C17.6562 6.16019 17.3397 6.15398 17.1407 6.34543L12.0036 11.2874L7.06992 6.15349Z"
        fill="white"
      />
    </svg>
  );
};
export default SearchBtn;
