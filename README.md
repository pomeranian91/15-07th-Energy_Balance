# Team15-wanted-pre-onboarding-15_07th_Energy_Balance
## **1. 💁 프로젝트 소개**

- 주제 : 3주차 에너지 밸런스 프로젝트
- 기간 : 22.02.17 ~ 22.02.19

---


<p align="center">
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img alt="TypeScript" src = "https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="styled" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />  
</p>

---

## 3. 👋🏻 팀원 소개

|조은총|최병현|조용우|
|----|---|---|
|<img width="200px" src='https://avatars.githubusercontent.com/u/66837741?v=4'/>|<img width="200px" src="https://avatars.githubusercontent.com/u/65222200?v=4"/>|<img width="200px" src='https://avatars.githubusercontent.com/u/89348550?v=4'>|
---

## 4**. 🔗 배포 링크**

[배포 링크 바로가기]

---

## 5**. 📄 기능 목록 명세**

### **1. 기능 분배**

### 1) **검색 기능(조은총)**

[키워드 입력]

- 

[연관 검색어] 

- 

### 2**) 카테고리 및 정렬 기능(최병현)**

[카테고리]

- Map 객체에 저장되어 있는 현재 checked 여부를 확인하여 categoryLIst 동적 렌더링
- 현재 상품의 checked true인 경우를 추출하여 새로운 상품 리스트 생성

[정렬]

- 정렬 버튼 클릭 시 clicked 식별 props를 사용하여 스타일 하이라이트 처리되도록 동적 렌더링
- 현재 정렬 기준에 따라 상품 리스트를 오름 차순 또는 내림 차순 으로 정렬

### 3**) 상품 리스트(조용우)**

[리스트 나열]

- state에 저장해둔 api값을 이용하여 map사용으로 배치
- 페이징 기능을 추가하여 한 페이지에 40개의 상품 노출

[레이아웃]

- 반응형 레이아웃 구성(1024px : 카테고리 상단으로 이동, 768px: 카테고리 숨김)
- 색상 통일화, 테마 설정

---

## 6**. 💿 설치 및 실행 방법**

Project Clone

`$ git clone` 

Project Setup

`$ npm install`

Project Start For Development

`$ npm start`

---

## 7**. 🌲 프로젝트 구조**

```
📦src
 ┣ 📂api
 ┃ ┗ 📜getNutrientsList.ts
 ┣ 📂components
 ┃ ┣ 📂categories
 ┃ ┃ ┣ 📜Categories.style.ts
 ┃ ┃ ┣ 📜Categories.tsx
 ┃ ┃ ┗ 📜Categories.type.ts
 ┃ ┣ 📂productList
 ┃ ┃ ┣ 📜Pagenation.tsx
 ┃ ┃ ┗ 📜ProductList.tsx
 ┃ ┣ 📂searchBar
 ┃ ┃ ┗ 📜SearchBar.tsx
 ┃ ┗ 📂sort
 ┃ ┃ ┣ 📜Sort.style.ts
 ┃ ┃ ┣ 📜Sort.tsx
 ┃ ┃ ┗ 📜Sort.type.ts
 ┣ 📂hooks
 ┃ ┣ 📜useCategories.ts
 ┃ ┗ 📜useSort.ts
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.ts
 ┣ 📂utils
 ┃ ┣ 📜getTarget.ts
 ┃ ┗ 📜sort.ts
 ┣ 📜SearchPage.tsx
 ┗ 📜index.tsx
```

## **8. 📕 레퍼런스**

- 이 프로젝트는 <u>[원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6) 기업 과제를 토대로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
