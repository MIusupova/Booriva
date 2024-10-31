import { Link } from "react-router-dom";
import Tshirt from "../../../assets/img/images/category-t-shirt.png";
import TshirtText from "../../../assets/img/icons/category-t-shirt-text";
import TshirtBackground from "../../../assets/img/icons/category-t-shirt";
import Bottom from "../../../assets/img/images/category-bottom.png";
import BottomText from "../../../assets/img/icons/category-bottom-text";
import BottomBackground from "../../../assets/img/icons/category-bottom";
import Up from "../../../assets/img/images/category-up.png";
import UpText from "../../../assets/img/icons/category-up-text";
import UpBackground from "../../../assets/img/icons/category-up";
import Dress from "../../../assets/img/images/category-dress.png";
import DressText from "../../../assets/img/icons/category-dress-text";
import DressBackground from "../../../assets/img/icons/category-dress";
import Costume from "../../../assets/img/images/category-costume.png";
import CostumeText from "../../../assets/img/icons/category-costume-text";
import CostumeBackground from "../../../assets/img/icons/category-costume";
import Hoodie from "../../../assets/img/images/category-hoodie.png";
import HoodieText from "../../../assets/img/icons/category-hoodie-text";
import HoodieBackground from "../../../assets/img/icons/category-hoodie";
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
              <Link to={`/booriva/catalog?menuId=ab0005`}>
                <div className={styles.categoriesImgAbsoluteButton}>
                  <TshirtText />
                </div>

                <TshirtBackground />
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
                  <Link to={`/booriva/catalog?menuId=003`}>
                    <div className={styles.categoriesImgAbsoluteButton}>
                      <BottomText />
                    </div>
                    <BottomBackground />
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
                  <Link to={`/booriva/catalog?menuId=002`}>
                    <div className={styles.categoriesImgAbsoluteButton}>
                      <UpText />
                    </div>
                    <UpBackground />
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
                  <Link to={`/booriva/catalog?menuId=001`}>
                    <div className={styles.categoriesImgAbsoluteButton}>
                      <DressText />
                    </div>
                    <DressBackground />
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
                  <Link to={`/booriva/catalog?menuId=006`}>
                    <div className={styles.categoriesImgAbsoluteButton}>
                      <CostumeText />
                    </div>
                    <CostumeBackground />
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
              <Link to={`/booriva/catalog?menuId=ab003`}>
                <div className={styles.categoriesImgAbsoluteButton}>
                  <HoodieText />
                </div>
                <HoodieBackground />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
