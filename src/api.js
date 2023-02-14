export async function getFoods() {
  const response = await fetch("https://learn.codeit.kr/3564/foods");
  const body = await response.json();
  return body;
}
