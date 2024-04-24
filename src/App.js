import Header from "./components/header/Header";
import CategoryProduct from "./pages/categoryProduct/CategoryProduct";
import HomePage from "./pages/homepage/HomePage";
import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import WishListPage from "./pages/wishListPage/WishListPage";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <CategoryProduct/>
      <WishListPage/>
      {/* <WishListEmpty/> */}
      <Footer />

    </div>
  );
}
export default App;
