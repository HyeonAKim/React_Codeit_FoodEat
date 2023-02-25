import FoodList from "./FoodListItem";
import { useEffect, useState } from "react";
import { getFoods } from "../api";

const LIMIT = 6;
function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [cursor, setCursor] = useState(null);
  const [loadingError, setLoadingError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const sortedItemList = items.sort((a, b) => b[order] - a[order]);

  const handleLastClick = () => setOrder("createdAt");
  const handleCaloriClick = () => setOrder("calorie");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getFoods(options);
    } catch (error) {
      setLoadingError(error);
    } finally {
      setIsLoading(false);
    }

    const { foods, paging } = result;
    if (!options.cursor) {
      setItems(foods);
    } else {
      setItems((preFoods) => [...preFoods, ...foods]);
    }
    setCursor(paging.nextCursor);
  };

  useEffect(() => {
    handleLoad({ order });
  }, [order]);

  const handleLoadMore = () => {
    handleLoad({ order, cursor, LIMIT });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchWord(e.target["search"].value);
    handleLoad({ order, cursor: "", LIMIT, search: searchWord });
  };
  return (
    <div>
      <button onClick={handleLastClick}>최신순</button>
      <button onClick={handleCaloriClick}>칼로리순</button>
      <form onSubmit={handleSearchSubmit}>
        <input name="search"></input>
        <button type="submit">검색</button>
      </form>
      <FoodList items={sortedItemList} onDelete={handleDelete}></FoodList>
      {cursor && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
