import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { getProductData } from "../../services/product";
import Like from "../../assets/img/icons/like";
import SizeXSS from "../../assets/img/icons/SizeXS";
import SizeSM from "../../assets/img/icons/SizeSM";
import SizeML from "../../assets/img/icons/SizeML";
import SizeLXL from "../../assets/img/icons/SizeLXL";
import ButtonBasket from "../../assets/img/icons/ButtonBasket";
import DotLine from "../../assets/img/icons/DotLine";
import "swiper/css";

import styles from "./CardProductPage.module.sass";

const CardProductPage = ({ select, setSelect }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [details, setDetails] = useState();
  const [images, setImages] = useState([]);
  console.log("asdsaas", select);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.search) {
      const data = getProductData(qs.parse(location.search.substring(1)).id);
      data.then((res) => {
        setName(res.name);
        setPrice(res.price);
        setDesc(res.desc);
        setDetails(res.details);
        setImages(res.images);
      });
    } else {
      navigate("/");
    }
  }, [location]);
  const addProductSelect = () => {
    if (location.search) {
      const id = qs.parse(location.search.substring(1)).id;
      if (!select.includes(id)) {
        setSelect([...select, id]);
      }
    }
  };

  return (
    <div className={styles.cardProductPage}>
      <main className={styles.slideBox}>
        <Swiper
          className={styles.slideBigBox}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        >
          {images.map((image) => (
            <SwiperSlide className={styles.slideBig} key={image}>
              <img className={styles.slideImg} src={image} alt="" />
              <div className={styles.likeBox} onClick={addProductSelect}>
                <Like active={false} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          direction={"vertical"}
        >
          {images.map((image) => (
            <SwiperSlide className={styles.slide} key={image}>
              <img className={styles.slideImg} src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <div className={styles.textBox}>
        <h1 className={styles.textTitle}>{name}</h1>
        <div className={styles.textPrice}>{`${price} ₽`}</div>
        <div className={styles.textSize}>Выбрать размер:</div>
        <div className={styles.sizeImages}>
          <div className={styles.size}>
            <SizeXSS />
          </div>
          <div className={styles.size}>
            <SizeSM />
          </div>
          <div className={styles.size}>
            <SizeML />
          </div>
          <div className={styles.size}>
            <SizeLXL />
          </div>
        </div>
        <div className={styles.ButtonBasket}>
          <ButtonBasket />
        </div>
        <div className={styles.textDescription}>{desc}</div>
        <div className={styles.textLine}>
          <DotLine />
        </div>
        <div className={styles.textCompositionBox}>
          <div className={styles.textComposition}>Состав:</div>
          <div className={styles.textCompositionSmall}>{details}</div>
        </div>
      </div>
    </div>
  );
};

export default CardProductPage;
