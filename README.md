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

## 9. 커서기반 페이지네이션 사용하기

1. api.js 에서 파라미터 부분에 cursor와 limit 부분 추가 후 query 변경하기
2. App.js 에서 getFoods가 실행되는 handleLaod argument 수정
3. app.js 에서 useEffect에 실행되는 초기 실행부분에서 handleLoad argument 변경
4. app.js 에서 cursor 와 setCursor state 생성하기
5. handleLoadMore 함수 생성하기 : handelLoad 를 실행하고 cursor state 를 넘기도록함
6. handleLoad 함수 수정 : parameter로 받은 options.cursor 값이 ""이 아닐때 리스트 추가, 하고 response로 받은 paging.nextCursor값으로 setCursor 설정
7. html에서 더보기 버튼 생성하고 onClcik 함수로 handlerLoadMore 함수 실행하도록 전달

## 10. 네트워크 로딩과 에러처리하기

1. api.js에서 reponse 가 ok가 아닐 때 에러를 뱉도록 설정
2. App.js에서 loadingError state생성하고 에러를 보여줄 수 있도록 설정.
3. App.js에서 isLoading state를 생성하고 로딩하는 동안 더보기 버튼을 비활성화하도록 설정

## 11. 검색 기능 추가하기

1. 검색어 받을 input form과 state 생성하기
2. handleSearchSubmit 실행 시 cursor 빈값으로 넘기기
3. api.js 쿼리에서 search 받아서 쿼리 날리기

## 12. 검색 기능 추가하기 (모범답안)

1. state가 변경되면서 랜더링 되는것을 고려해서 handleSearchSubmit이 아닌 useEffect에 search를 추가해준다.
2. 더보기 버튼을 누를 때도 search props을 같이 넘겨준다.

## 13. 입력폼 생성하기

1. FoodForm.js생성하기
2. title, calorie, content state 생성
3. App.js FoodForm 적용하기
