# FoodEat React Page 생성

## 1. first commit : npm init react-app .

## 2. json 활용한 푸드 목록 보여주기

- 배열 랜더링 사용하기 (map) : items.map((item) => {return (<li></li>); })

## 3. 칼로리 높은 순대로 정렬하기

- sort (a, b) => ( a.column - b.column)
- onClick Button event - 최신순, 칼로리순으로 정렬하기

## 4. Filter로 아이템 삭제하기

1. setter 함수 생성 : item, setItems , default : mockItem
2. 삭제버튼으로 내려줄 함수 생성하기 : App.js / handleDelete()
3. handleDelete 함수에서 id 를 받아서 items list filter 처리하기
4. APP 에서 FoodList로 handleDelete Prop 전달 > FoodListItems로 prop으로 전달
5. FoodListItem에서 삭제 버튼 생성하고 Onclick 함수 생성 : handleDeleteClick
6. handleDeleteClick에서 item.id를 handleDelete함수로 전달하기.

## 5. key prop 적용하기

1. 데이터 상에서 key로 적용할 속성값을 찾는다.
2. 데이터를 구분할 수 있는 부분에 key 로 적용한다. FoodListItem.js -> FoodList() 적용
