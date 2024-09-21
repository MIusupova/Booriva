import { Route, Routes, useLocation } from "react-router-dom";
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
import PlacingOrder from "./pages/placingOrder/PlacingOrder";
import { useSelector } from "react-redux";
import Results from "./components/results/Results";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import MobileHeader from "./components/header/mobileHeader/MobileHeader";

export const SelectOpen = createContext();

const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState("");
  const location = useLocation();
  const cart = useSelector((state) => state.cart.cart);
  const [setCart] = useState(
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
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    localStorage.setItem("select", JSON.stringify(select));
  }, [select]);

  return (
    <div className={`${isBasketOpen && "no-scroll"}`}>
      <SelectOpen.Provider value={{ select, setSelect }}>
        <Basket
          isBasketOpen={isBasketOpen}
          setIsBasketOpen={setIsBasketOpen}
          cart={cart}
          setCart={setCart}
        />

        <Header
          setIsBasketOpen={setIsBasketOpen}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          value={value}
          setValue={setValue}
        />
        <MobileHeader
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          value={value}
          setValue={setValue}
        />
        <Routes>
          <Route path="/booriva" element={<HomePage />} />
          <Route
            path="/booriva/catalog"
            element={<Catalog select={select} setSelect={setSelect} />}
          />
          <Route
            path="/booriva/wishlistPage"
            element={<WishListPage select={select} setSelect={setSelect} />}
          />
          <Route path="/booriva/wishListEmpty" element={<WishListEmpty />} />
          <Route
            path="/booriva/cardProductPage"
            element={<CardProductPage select={select} setSelect={setSelect} />}
          />

          <Route path="/booriva/mistake" element={<Mistake />} />
          <Route path="/booriva/boorivagirls" element={<BoorivaGirls />} />
          <Route path="/booriva/results" element={<Results />} value={value} />
          <Route
            path="/booriva/placingOrder"
            element={
              <PlacingOrder
                setIsBasketOpen={setIsBasketOpen}
                select={select}
                setSelect={setSelect}
              />
            }
          />
        </Routes>
        <Instagram />
        <Footer />
      </SelectOpen.Provider>
      <MobileMenu isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen}/>
    </div>
  );
};
export default App;
