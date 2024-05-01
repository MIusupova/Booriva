import Vector from "../../assets/img/icons/vector"

import styles from "./Title.module.sass";

const Title = ({title, subtitle}) => {
    return (
        <h1 className={styles.title}>
            {title}
            <span className={styles.subTitle}>
                {subtitle}
                <Vector/>
            </span>
        </h1>
    )
}
export default Title