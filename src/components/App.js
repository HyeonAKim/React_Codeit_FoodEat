import FoodList from "./FoodListItem";
import { useState } from "react";
import { getFoods } from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortedItemList = items.sort((a, b) => b[order] - a[order]);

  const handleLastClick = () => setOrder("createdAt");
  const handleCaloriClick = () => setOrder("calorie");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { foods } = await getFoods();
    setItems(foods);
  };

  return (
    <div>
      <button onClick={handleLoadClick}>불러오기</button>
      <button onClick={handleLastClick}>최신순</button>
      <button onClick={handleCaloriClick}>칼로리순</button>
      <FoodList items={sortedItemList} onDelete={handleDelete}></FoodList>
    </div>
  );
}

export default App;
