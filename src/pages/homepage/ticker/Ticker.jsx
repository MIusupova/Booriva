import { Link } from "react-router-dom";
import styles from "./Ticker.module.sass";


const Ticker = () => {
    

    return (
        <Link to={`/catalog`}
         > 
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
        </Link>
    )
};
export default Ticker;