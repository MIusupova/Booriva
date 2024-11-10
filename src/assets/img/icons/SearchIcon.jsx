import styles from "./../../../components/header/search/Search.module.sass";
const SearchIcon = ({searchOpen}) => {
  return (
 
      <svg
      setSearchOpen={searchOpen}
        className={styles.searchIcon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 11C20 6.032 15.968 2 11 2C6.032 2 2 6.032 2 11C2 15.968 6.032 20 11 20C15.968 20 20 15.968 20 11ZM18 11C18 14.867 14.867 18 11 18C7.132 18 4 14.867 4 11C4 7.132 7.132 4 11 4C14.867 4 18 7.132 18 11ZM18.6618 18.8937C18.3395 19.214 18.3379 19.735 18.6583 20.0574L20.315 21.7239C20.6353 22.0462 21.1563 22.0478 21.4786 21.7274L21.7289 21.4787C22.0512 21.1583 22.0527 20.6373 21.7323 20.315L20.0757 18.6484C19.7553 18.3261 19.2343 18.3246 18.912 18.6449L18.6618 18.8937Z"
          fill={searchOpen ?  "current" : "#000000"}
        />
      </svg>
 
  );
};
export default SearchIcon;
