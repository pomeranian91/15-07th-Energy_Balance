## Team15-wanted-pre-onboarding-15_07th_Energy_Balance
## 1. 💁 프로젝트 소개

- 주제 : 3주차 에너지 밸런스 프로젝트
- 기간 : 22.02.17 ~ 22.02.19

## 2. 🛠️ 기술 스택
<p align="center">
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img alt="TypeScript" src = "https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="styled" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />  
</p>

## 3. 👋🏻 팀원 소개

조용우 외 2명

## 4. 🔗 배포 링크

[배포 링크 바로가기](https://energy-banlance.herokuapp.com/)


## 5. 📄 기능 목록 명세

[리스트 나열]

- state에 저장해둔 api값을 이용하여 map사용으로 배치
- 페이징 기능을 추가하여 한 페이지에 40개의 상품 노출

[레이아웃]

- 반응형 레이아웃 구성(1024px : 카테고리 상단으로 이동, 768px: 카테고리 숨김)
- 색상 통일화, 테마 설정

## 6. 💿 설치 및 실행 방법

Project Clone

`$ git clone` 

Project Setup

`$ npm install`

Project Start For Development

`$ npm start`

## 7. 🌲 프로젝트 구조

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

## 8. 📕 레퍼런스

- 이 프로젝트는 <u>[원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6) 기업 과제를 토대로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
