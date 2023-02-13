function FoodListItem({ item, onDelete }) {
  const { imgUrl, title, calorie, content } = item;
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div>
      <img src={imgUrl} alt={title}></img>
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <FoodListItem item={item} onDelete={onDelete}></FoodListItem>
          </li>
        );
      })}
    </ul>
  );
}

export default FoodList;
