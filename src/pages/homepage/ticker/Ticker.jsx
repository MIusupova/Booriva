import { Link } from "react-router-dom";
import styles from "./Ticker.module.sass";
import { getCatalogAllData } from "../../../services/catalog";
import { useEffect, useState } from "react";

const Ticker = ({id}) => {
    const [ticker, setTicker] = useState([])
    useEffect(() => {  
        getCatalogAllData().then((res) => setTicker(res));
        
    }, [])

    return (
        <Link to={`/catalog`}
        onClick={() => setTicker(id)}
        key={id}
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