import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Catalog from "./pages/catalog/Catalog";
import HomePage from "./pages/homepage/HomePage";
import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import WishListPage from "./pages/wishListPage/WishListPage";
import Footer from "./components/footer/Footer";
import CardProductPage from "./pages/cardProductPage/CardProductPage";
import Instagram from "./components/instagram/Instagram";
import Basket from "./components/basket/BasketPage";
import { useState } from "react";

const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  return (
    <div className="App">
      <Basket isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen}/>
      <Header setIsBasketOpen={setIsBasketOpen}/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/wishlistPage" element={<WishListPage/>}/>
          <Route path="/wishListEmpty" element={<WishListEmpty/>}/>
          <Route path="/cardProductPage" element={<CardProductPage/>}/>
        </Routes>
      <Instagram />
      <Footer />
  </div>
  );
}
export default App;
