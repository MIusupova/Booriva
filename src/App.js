import Header from "./components/header/Header";
import CategoryProduct from "./pages/categoryProduct/CategoryProduct";
import HomePage from "./pages/homepage/HomePage";
import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import WishListPage from "./pages/wishListPage/WishListPage";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<HomePage/>*/}
      <CategoryProduct/>
      {/*<WishListPage/>*/}
      {/*<WishListEmpty/>*/}

    </div>
  );
}
export default App;
