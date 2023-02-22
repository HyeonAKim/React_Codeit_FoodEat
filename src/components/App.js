import FoodList from "./FoodListItem";
import { useEffect, useState } from "react";
import { getFoods } from "../api";

const LIMIT = 6;
function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [cursor, setCursor] = useState("");
  const sortedItemList = items.sort((a, b) => b[order] - a[order]);

  const handleLastClick = () => setOrder("createdAt");
  const handleCaloriClick = () => setOrder("calorie");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    const { foods, paging } = await getFoods(options);
    if (options.cursor === "") {
      setItems(foods);
    } else {
      setItems((preFoods) => [...preFoods, ...foods]);
    }
    setCursor(paging.nextCursor);
  };

  useEffect(() => {
    handleLoad({ order, cursor: "", limit: LIMIT });
  }, [order]);

  const handleLoadMore = () => {
    handleLoad({ order, cursor, LIMIT });
  };

  return (
    <div>
      <button onClick={handleLastClick}>최신순</button>
      <button onClick={handleCaloriClick}>칼로리순</button>
      <FoodList items={sortedItemList} onDelete={handleDelete}></FoodList>
      {cursor === null || <button onClick={handleLoadMore}>더보기</button>}
    </div>
  );
}

export default App;
