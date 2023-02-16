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

## 6. 서버에서 데이터 가져오기

1. api.js 파일에서 getFoods함수를 생성한다. - 비동기함수와 await를 활용해서 데이터가 불러올때까지 기다린다.
2. App.js 파일에서 기존에 사용하던 mockjson파일을 지우고 getFoods()함수를 실행해서 데이터를 불러온다.

## 7. 페이지가 열렸을 때 음식 목록가져오기

1. App.js 파일에서 useEffect 을 활용하여 handleLoad 콜백함수 실행과 빈배열을 전달한다.

## 8. 서버에서 정렬된 데이터 불러오기

1. api.js getFoods함수에서 파라미터로 order를 받고 query가 변경되면 url이 변경되도록 수정한다.
2. App.js 에서 getFoods함수가 호출되는 부분 handleLoad()에 아큐먼트로 order 값이 전달되게 변경한다.
3. App.js 의 useEffect 부분에서 handleLoad함수에 order를 전달해주도록 변경하고, 디펜던시리스트에서 order 값을 기억하도록 설정해준다.
