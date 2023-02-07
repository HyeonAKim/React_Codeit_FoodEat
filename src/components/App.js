import FoodList from "./FoodListItem";
import items from "../mock.json";

function App() {
  return (
    <div>
      <FoodList items={items}></FoodList>
    </div>
  );
}

export default App;
