import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import CategoryProduct from "./pages/categoryProduct/CategoryProduct";
import HomePage from "./pages/homepage/HomePage";
import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import WishListPage from "./pages/wishListPage/WishListPage";
import Footer from "./components/footer/Footer";
import CardProductPage from "./pages/cardProductPage/CardProductPage";
import Instagram from "./components/instagram/Instagram";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/categoryProduct" element={<CategoryProduct/>}/>
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
