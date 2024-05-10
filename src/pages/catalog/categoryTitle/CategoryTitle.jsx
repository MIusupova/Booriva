import Title from "../../../components/title/Title"

import styles from "./CategoryTitle.module.sass";

const CategoryTitle = () => {
    return (
        <div className={styles.categoryTitle}>
                    <Title title = 'Верх' subtitle = 'топы'/>
                    <div className={styles.categoryTitleSvg}></div>   
        </div>
                
    )
}
export default CategoryTitle