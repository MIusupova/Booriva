import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Catalog from "./pages/catalog/Catalog";
import HomePage from "./pages/homepage/HomePage";
import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import WishListPage from "./pages/wishListPage/WishListPage";
import Footer from "./components/footer/Footer";
import CardProductPage from "./pages/cardProductPage/CardProductPage";
import Instagram from "./components/instagram/Instagram";
import Basket from "./components/basket/BasketPage";
import PlacingOrder from "./pages/placingOrder/PlacingOrder";
import Checkout from "./components/checkout/Checkout";

const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [select, setSelect] = useState(
    localStorage.getItem("select")
      ? JSON.parse(localStorage.getItem("select"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("select", JSON.stringify(select));
  }, [select]);



  return (
    <div className={`${isBasketOpen && 'no-scroll'}`}>
      <Basket isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen} cart={cart} setCart={setCart}/>
      <Header setIsBasketOpen={setIsBasketOpen}/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalog" element={<Catalog select={select} setSelect={setSelect}/>} />
          <Route path="/wishlistPage" element={<WishListPage select={select} setSelect={setSelect}/>}/>
          <Route path="/wishListEmpty" element={<WishListEmpty/>}/>
          <Route path="/cardProductPage" element={<CardProductPage select={select} setSelect={setSelect} cart={cart} setCart={setCart}/>}/>
        </Routes>
      <Instagram />
      <Footer />
    </div>
  );
};
export default App;
