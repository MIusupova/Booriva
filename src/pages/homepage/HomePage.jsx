import Header from "../../components/header/Header"
import styles from "./HomePage.module.css";
import NewItems from "./new_items/new_items"
import NewCollectionBox from "./new_collection/new_collection"
import Ticker from "./ticker/Ticker";
import Categories from "./categories/categories";

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <Header/>
            <Categories/>
            <NewItems/>
            <NewCollectionBox/>
            <Ticker/>
        </div>
    )
}
export default HomePage