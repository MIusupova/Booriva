import { Link } from "react-router-dom";
import Tshirt from "../../../assets/img/images/category-t-shirt.png";
import TshirtBackground from "../../../assets/img/icons/category-t-shirt";
import Bottom from "../../../assets/img/images/category-bottom.png";
import Up from "../../../assets/img/images/category-up.png";
import UpBackground from "../../../assets/img/icons/category-up";
import Dress from "../../../assets/img/images/category-dress.png";
import DressBackground from "../../../assets/img/icons/category-dress";
import Costume from "../../../assets/img/images/category-costume.png";
import CostumeBackground from "../../../assets/img/icons/category-costume";
import Hoodie from "../../../assets/img/images/category-hoodie.png";
import styles from "./categories.module.sass";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.categoriesBox}>
        <div className={styles.categoriesImgRelative}>
          <Link to={`/booriva/catalog?menuId=ab0005`}>
            <img className={styles.imgBig} src={Tshirt} alt="Tshirt" />
          </Link>
          <div className={`${styles.categoriesImgAbsolute} ${styles.Tshirt}`}>
            <div className={styles.categoriesImgRelativeButton}>
              <Link
                to={`/booriva/catalog?menuId=ab0005`}
                className={styles.linkButton}
              >
                <TshirtBackground />
                <div className={styles.categoriesImgAbsoluteButton}>
                  ФУТБОЛКИ
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.categoriesBoxSmall}>
          <Link to={`/booriva/catalog?menuId=003`}>
            <div className={styles.categoriesImgRelative}>
              <img className={styles.imgSmall} src={Bottom} alt="Bottom" />
              <div
                className={`${styles.categoriesImgAbsolute} ${styles.Bottom}`}
              >
                <div className={styles.categoriesImgRelativeButton}>
                  <Link
                    to={`/booriva/catalog?menuId=003`}
                    className={styles.linkButton}
                  >
                    <UpBackground />
                    <div className={styles.categoriesImgAbsoluteButton}>
                      НИЗ
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
          <Link to={`/booriva/catalog?menuId=002`}>
            <div className={styles.categoriesImgRelative}>
              <img className={styles.imgSmall} src={Up} alt="Up" />
              <div className={`${styles.categoriesImgAbsolute} ${styles.Up}`}>
                <div className={styles.categoriesImgRelativeButton}>
                  <Link
                    to={`/booriva/catalog?menuId=002`}
                    className={styles.linkButton}
                  >
                    <UpBackground />
                    <div className={styles.categoriesImgAbsoluteButton}>
                      ВЕРХ
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.categoriesBox}>
        <div className={styles.categoriesBoxSmall}>
          <Link to={`/booriva/catalog?menuId=001`}>
            <div className={styles.categoriesImgRelative}>
              <img className={styles.imgSmall} src={Dress} alt="Dress" />
              <div
                className={`${styles.categoriesImgAbsolute} ${styles.Dress}`}
              >
                <div className={styles.categoriesImgRelativeButton}>
                  <Link
                    to={`/booriva/catalog?menuId=001`}
                    className={styles.linkButton}
                  >
                    <DressBackground />
                    <div className={styles.categoriesImgAbsoluteButton}>
                      ПЛАТЬЯ
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
          <Link to={`/booriva/catalog?menuId=006`}>
            <div className={styles.categoriesImgRelative}>
              <img className={styles.imgSmall} src={Costume} alt="Costume" />
              <div
                className={`${styles.categoriesImgAbsolute} ${styles.Costume}`}
              >
                <div className={styles.categoriesImgRelativeButton}>
                  <Link
                    to={`/booriva/catalog?menuId=006`}
                    className={styles.linkButton}
                  >
                    <CostumeBackground />
                    <div className={styles.categoriesImgAbsoluteButton}>
                      КОСТЮМЫ
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.categoriesImgRelative}>
          <Link to={`/booriva/catalog?menuId=ab003`}>
            <img className={styles.imgBig} src={Hoodie} alt="Hoodie" />
          </Link>
          <div className={`${styles.categoriesImgAbsolute} ${styles.Hoodie}`}>
            <div className={styles.categoriesImgRelativeButton}>
              <Link
                to={`/booriva/catalog?menuId=ab003`}
                className={styles.linkButton}
              >
                <UpBackground />
                <div className={styles.categoriesImgAbsoluteButton}>ХУДИ</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
