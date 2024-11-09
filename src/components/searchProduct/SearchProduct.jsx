import { Link, useNavigate } from "react-router-dom";
import SearchProductIcon from "../../assets/img/icons/SearchProductIcon";
import styles from "./SearchProduct.module.sass";
import SearchBtn from "../../assets/img/icons/SearchBtn";

const SearchProduct = ({ setSearchOpen, searchOpen, setValue, value }) => {
  const navigate = useNavigate();
  const openResultPage = (e) => {
    if (e.key === "Enter") {
      navigate(`/booriva/results?search=${value}`);
      setSearchOpen(false);
    }
  };
  return (
    <div
      className={styles.searcdiv + " " + (searchOpen && styles.searcdiv_open)}
      onClick={() => setSearchOpen(false)}
    >
      <input
        placeholder="Поиск товаров"
        className={styles.searcinput}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={openResultPage}
        value={value}
      />
      <Link to={`/booriva/results?search=${value}`}>
        <div className={styles.searchIcons}>
          <SearchProductIcon />
        </div>
      </Link>
      {value && <SearchBtn value={value} setValue={setValue} />}
    </div>
  );
};
export default SearchProduct;
