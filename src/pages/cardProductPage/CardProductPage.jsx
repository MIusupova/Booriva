import { useEffect, useState } from "react";import { Link, useLocation } from "react-router-dom";
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

const CardProductPage = ({cart, setCart}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [details, setDetails] = useState();
  const [images, setImages] = useState([]);useEffect(() => {
  if(location.search){
      const data = getProductData(qs.parse(location.search.substring(1)).id);
      data.then((res) => {
      setName(res.name);
      setPrice(res.price);
      setDesc(res.desc);
      setDetails(res.details);
      setImages(res.images);
    });
    }
    
  }, [location]);

  const addProductInCart = () => {
    if (location.search) {
      const id = qs.parse(location.search.substring(1)).id
      if(!cart.includes(id)){
        setCart([...cart, id])
      }
    }
  }
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
        <SwiperSlide className={styles.slideBig}>
            <img className={styles.slideImg} src={images[0]} alt="" />
            <div className={styles.likeBox}>
              <Link to="/wishlistPage">
                <Like active={false} />
            </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBig}>
            <img className={styles.slideImg} src={images[1]} alt="" />
            <div className={styles.likeBox}>
              <Link to="/wishlistPage">
                <Like active={false} />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBig}>
            <img className={styles.slideImg} src={images[2]} alt="" />
            <div className={styles.likeBox}>
              <Link to="/wishlistPage">
                <Like active={false} />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBig}>
            <img className={styles.slideImg} src={images[3]} alt="" />
            <div className={styles.likeBox}>
              <Link to="/wishlistPage">
                <Like active={false} />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          direction={"vertical"}
        >
        <SwiperSlide className={styles.slide}>
            <img className={styles.slideImg} src={images[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img className={styles.slideImg} src={images[1]} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img className={styles.slideImg} src={images[2]} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slideEnd}>
            <img className={styles.slideImg} src={images[3]} alt="" />
          </SwiperSlide>
        </Swiper>
      </main>
      <div className={styles.textBox}>
        <h1 className={styles.textTitle}>{name}</h1>
        <div className={styles.textPrice}>{`${price} ₽`}</div>
        <div className={styles.textSize}>Выбрать размер:</div>
        <div className={styles.sizeImages}>
          <div className={styles.size}>
          <SizeXSS></SizeXSS>
          </div>
          <div className={styles.size}>
          <SizeSM></SizeSM>
          </div>
          <div className={styles.size}>
          <SizeML></SizeML>
          </div>
          <div className={styles.size}>
          <SizeLXL></SizeLXL>
          </div>
        </div>
        <div className={styles.ButtonBasket} onClick={addProductInCart}>
          <ButtonBasket></ButtonBasket>
        </div>
        <div className={styles.textDescription}>{desc}</div>
        <div className={styles.textLine}>
        <DotLine></DotLine>
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
