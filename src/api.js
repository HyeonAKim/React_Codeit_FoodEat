export async function getFoods({
  order = "createdAt",
  cursor = "",
  limit = 6,
}) {
  const query = `order=${order}&&cursor=${cursor}&&limit=${limit}`;
  const response = await fetch(`https://learn.codeit.kr/3564/foods?${query}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
