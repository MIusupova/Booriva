import HomePage from "./pages/homepage/HomePage";
import NewItems from "./pages/homepage/new_items/new_items";
import NewCollectionBox from "./pages/homepage/new_collection/new_collection";

function App() {
  return (
    <div className="App">
      <HomePage/>
      <NewItems/>
      <NewCollectionBox/>
    </div>
  );
}
export default App;
