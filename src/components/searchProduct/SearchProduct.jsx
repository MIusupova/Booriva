import { Link, useNavigate } from "react-router-dom";
import SearchProductIcon from "../../assets/img/icons/SearchProductIcon";
import styles from "./SearchProduct.module.sass";
import SearchBtn from "../../assets/img/icons/SearchBtn";

const SearchProduct = ({ setSearchOpen, searchOpen, setValue, value }) => {
  const navigate = useNavigate();
  const openResultPage = (e) => {
    if (e.key === "Enter") {
      navigate(`/results?search=${value}`);
      setSearchOpen(false);
    }
  };
  return (
    <div
      className={styles.searcdiv + " " + (searchOpen && styles.searcdiv_open)}
    >
      <input
        placeholder="Поиск товаров"
        className={styles.searcinput}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={openResultPage}
        value={value}
      />
      <Link to={`/results?search=${value}`}>
        <div className={styles.searchIcons}>
          <SearchProductIcon />
        </div>
      </Link>
      {value && <SearchBtn value={value} setValue={setValue} />}
    </div>
  );
};
export default SearchProduct;
