import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import Like from '../../assets/img/icons/like';
import SizeXSS from '../../assets/img/icons/SizeXS';
import SizeSM from '../../assets/img/icons/SizeSM';
import SizeML from '../../assets/img/icons/SizeML';
import SizeLXL from '../../assets/img/icons/SizeLXL';
import ButtonBasket from '../../assets/img/icons/ButtonBasket';
import DotLine from '../../assets/img/icons/DotLine';
import CardBomberSmall1 from '../../assets/img/images/card-bomberSmall1.png'
import CardBomberSmall2 from '../../assets/img/images/card-bomberSmall2.png'
import CardBomberSmall3 from '../../assets/img/images/card-bomberSmall3.png'
import CardBomberSmall4 from '../../assets/img/images/card-bomberSmall4.png'
import 'swiper/css';

import styles from "./CardProductPage.module.sass";

const CardProductPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const active = false
    return (
        <div className={styles.cardProductPage}>
            <main className={styles.slideBox}>
                <Swiper className={styles.slideBigBox} modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}>
                    <SwiperSlide className={styles.slideBig}><img className={styles.slideImg} src={CardBomberSmall1} alt=''/><div className={styles.likeBox}><Like active={active}/></div></SwiperSlide>
                    <SwiperSlide className={styles.slideBig}><img className={styles.slideImg} src={CardBomberSmall2} alt=''/><div className={styles.likeBox}><Like active={active}/></div></SwiperSlide>
                    <SwiperSlide className={styles.slideBig}><img className={styles.slideImg} src={CardBomberSmall3} alt=''/><div className={styles.likeBox}><Like active={active}/></div></SwiperSlide>
                    <SwiperSlide className={styles.slideBig}><img className={styles.slideImg} src={CardBomberSmall4} alt=''/><div className={styles.likeBox}><Like active={active}/></div></SwiperSlide>
                </Swiper>
                <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    direction={'vertical'}>
                        <SwiperSlide className={styles.slide}><img className={styles.slideImg} src={CardBomberSmall1} alt=''/></SwiperSlide>
                        <SwiperSlide className={styles.slide}><img className={styles.slideImg} src={CardBomberSmall2} alt=''/></SwiperSlide>
                        <SwiperSlide className={styles.slide}><img className={styles.slideImg} src={CardBomberSmall3} alt=''/></SwiperSlide>
                        <SwiperSlide className={styles.slideEnd}><img className={styles.slideImg} src={CardBomberSmall4} alt=''/></SwiperSlide>
                </Swiper>
            </main>    
            <div className={styles.textBox}>
                <h1 className={styles.textTitle}>Бомбер Gone Crazy хаки</h1>
                <div className={styles.textPrice}>2 499 ₽</div>
                <div className={styles.textSize}>Выбрать размер:</div>
                <div className={styles.sizeImages}>
                    <div className={styles.size}><SizeXSS></SizeXSS></div>
                    <div className={styles.size}><SizeSM></SizeSM></div>
                    <div className={styles.size}><SizeML></SizeML></div>
                    <div className={styles.size}><SizeLXL></SizeLXL></div>
                </div>
                <div className={styles.ButtonBasket}><ButtonBasket></ButtonBasket></div>
                <div className={styles.textDescription}>Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура выполнена в серебряном цвете. Акцентными деталями выступают объемные нашитые карманы и капюшон, который отстёгивается.</div>
                <div className={styles.textLine}><DotLine></DotLine></div>
                <div className={styles.textCompositionBox}>
                    <div className={styles.textComposition}>Состав:</div>
                    <div className={styles.textCompositionSmall}>50% вискоза, 50% полиэстер</div>
                </div>
            </div> 
          </div> )
}

export default CardProductPage;
