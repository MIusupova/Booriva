import { Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import Catalog from "./pages/catalog/Catalog";
import HomePage from "./pages/homepage/HomePage";
import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import WishListPage from "./pages/wishListPage/WishListPage";
import Footer from "./components/footer/Footer";
import CardProductPage from "./pages/cardProductPage/CardProductPage";
import Instagram from "./components/instagram/Instagram";
import Basket from "./components/basket/BasketPage";
import Mistake from "./components/mistake/Mistake";
import BoorivaGirls from "./pages/BoorivaGirls/BoorivaGirls";

export const SelectOpen = createContext()

const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [ select, setSelect ] = useState(
    localStorage.getItem('select') ? JSON.parse(localStorage.getItem('select')) : []
  )

  useEffect(() => {localStorage.setItem('select', JSON.stringify(select))}, [select])
  return (
    <div className="App">
      <SelectOpen.Provider value={{select, setSelect}}>
        <Basket isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen}/>
        <Header setIsBasketOpen={setIsBasketOpen}/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/wishlistPage" element={<WishListPage/>}/>
            <Route path="/wishListEmpty" element={<WishListEmpty/>}/>
            <Route path="/cardProductPage" element={<CardProductPage/>}/>
            <Route path="/mistake" element={<Mistake/>}/>
            <Route path="/boorivagirls" element={<BoorivaGirls/>}/>
          </Routes>
        <Instagram />
        <Footer />
      </SelectOpen.Provider>
  </div>
  );
}
export default App;
