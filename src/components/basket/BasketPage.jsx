import { Link } from 'react-router-dom'
import ButtonBasketPink from '../../assets/img/icons/ButtonBasketPink'
import CrossButtonBasket from '../../assets/img/icons/СrossButtonBasket'
import styles from './BasketPage.module.sass'

const BasketPage = ({isBasketOpen, setIsBasketOpen}) => {
    return(
        <div className={styles.basket__wrap}>
            <div className={styles.backdrop + ' ' + (isBasketOpen && styles.backdrop_open)} onClick={() =>  setIsBasketOpen(false)}></div>

            <div className={styles.basket + ' ' + (isBasketOpen && styles.basket_open)}>
                <div className={styles.basketBoxOne} >
                <CrossButtonBasket setIsBasketOpen={setIsBasketOpen} />
                <div className={styles.basketBox}> 
                        <h1 className={styles.basketTitle}>Корзина</h1>
                        <div className={styles.products}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat odit aperiam corrupti, commodi voluptate libero omnis possimus quaerat quod incidunt tenetur explicabo molestiae? Laborum dolorem ipsam cupiditate velit quibusdam ratione?Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius aliquid dolores expedita nemo itaque laboriosam totam dignissimos, exercitationem architecto adipisci quisquam esse ad possimus a illo nisi eum cumque beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam, explicabo quis earum alias quaerat laboriosam eius. A deleniti placeat atque ea cupiditate eligendi earum incidunt voluptas error harum. Omnis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae molestias incidunt labore placeat optio quia deserunt id repellat tempore autem, doloribus, dolorem et veniam odio, iste minus sint dolorum voluptas? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni obcaecati quod id illo quas provident eveniet! Sint ab distinctio excepturi laborum. Porro, aperiam nostrum. Eos beatae exercitationem non quod dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero accusantium recusandae vero ullam nam iusto perferendis culpa deserunt temporibus, alias voluptatum blanditiis aut pariatur ad! Repellat nihil eum molestias laudantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut cupiditate odit unde, quia ea culpa a blanditiis sequi saepe, excepturi, vero cumque id perferendis ad totam amet iste molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi tenetur quod adipisci. Amet ea vero nam facere inventore saepe dolorum nulla eaque accusamus, similique repellat vitae ipsam, dolore quis in necessitatibus, culpa cupiditate expedita! Repudiandae corrupti voluptates mollitia nihil eaque optio, blanditiis quidem illum, sapiente, error est consectetur? Quas vel saepe nesciunt dolore eos unde amet, consequatur, quaerat repellat quidem illo soluta nobis aliquid earum aut ullam asperiores possimus cumque ipsa dolores quo rem, in magni. Distinctio ducimus culpa autem saepe quibusdam repellendus consectetur consequuntur veritatis itaque, mollitia, tenetur veniam tempora, et ea adipisci voluptatum dolore dolorum nulla suscipit impedit cum excepturi nihil. Officia iure nesciunt officiis reprehenderit nobis eos voluptatibus dolor optio accusamus praesentium labore cum quibusdam, repellat fugit reiciendis. Sapiente, non. In quas optio alias ab natus consequuntur reprehenderit itaque. Nisi impedit consequuntur repudiandae blanditiis autem! Beatae est et, quos excepturi reiciendis aut nemo praesentium labore libero minima alias quis aperiam quo. Esse eos consequatur iusto eius nam dolor rerum maxime aspernatur quo laboriosam aliquam ea culpa repellendus numquam, nemo aperiam nihil debitis dicta facilis officiis sequi? Quisquam sed voluptatum qui magnam libero, ea numquam in doloremque excepturi autem placeat commodi nemo architecto, ab, sequi quaerat praesentium iusto!</div>

                </div>
                    <div className={styles.basketPrice}>
                        <div className={styles.basketPriceOne}>
                            <span className={styles.basketTextSmall}>Cумма заказа:</span>
                            <span className={styles.basketTextBig}>4 998 ₴</span>
                        </div>
                        <div className={styles.basketPriceOne}>
                            <span className={styles.basketTextSmall}>Стоимость доставки:</span>
                            <span className={styles.basketTextBig}>бесплатно</span>
                        </div>
                        <div className={styles.basketTextPriceOne}>   
                            <span className={styles.basketTextPrice}>К оплате: . . . . . . .</span>
                            <span className={styles.basketTextBigPrice}>4 998 ₴</span>
                        </div>
                    </div>
                    <Link  to="/" className={styles.basketBtn}>
                        <ButtonBasketPink/>
                        <div className={styles.text}>{'Оформить заказ'}</div>
                    </Link>
                     
            
                </div>
            
                    
            </div>

        </div>
        
        
    )
}

export default BasketPage