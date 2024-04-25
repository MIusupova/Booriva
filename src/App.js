import Header from "./components/header/Header";
import CategoryProduct from "./pages/categoryProduct/CategoryProduct";
import HomePage from "./pages/homepage/HomePage";
import Footer from "./components/footer/Footer";
import Instagram from "./components/instagram/Instagram";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Instagram />
      <Footer />
      {/*<CategoryProduct/>*/}
    </div>
  );
}
export default App;
