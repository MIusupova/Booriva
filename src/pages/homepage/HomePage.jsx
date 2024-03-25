import Header from "../../components/header/Header"
import styles from "./HomePage.module.css";
import Ticker from "./ticker/Ticker";

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <Header/>
            <Ticker/>
        </div>
    )
}
export default HomePage