function FoodListItem({ item }) {
  const { imgUrl, title, calorie, content } = item;

  return (
    <div>
      <img src={imgUrl} alt={title}></img>
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
    </div>
  );
}

function FoodList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <FoodListItem item={item}></FoodListItem>
          </li>
        );
      })}
    </ul>
  );
}

export default FoodList;
