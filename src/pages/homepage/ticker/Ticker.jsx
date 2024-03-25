import styles from "./Ticker.module.css";

const Ticker = () => {
    return (
        <div className = {styles.ticker}>
            <ul className = {styles.blockticker}>
                <li className = {styles.text}>топовые товары</li>
                <li className = {styles.text}>топовые товары</li>
                <li className = {styles.text}>топовые товары</li>
                <li className = {styles.text}>топовые товары</li>
                <li className = {styles.text}>топовые товары</li>
                <li className = {styles.text}>топовые товары</li>
            </ul>
        </div>
    )
};
export default Ticker;