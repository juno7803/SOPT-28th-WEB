### 🙆🏻‍♂️ 3차 과제 GithubFinder

[👉 실행해보기](https://github-finder-7pj0ihhwr-juno7803.vercel.app/)

**기본 과제 구현 화면**

![githubFinder](https://user-images.githubusercontent.com/26808056/116347333-f7876000-a826-11eb-9d08-bc0cec2ef4e3.gif)

- 메인 페이지(`index.html/3000`) 에서 `SearchBar.tsx` 불러옴, 아이디 입력 시 `result/userId ` 로 이동
- 결과 페이지(`localhost:3000/result/userId?=${userId}`) 로 이동하여 결과(`UserCard.tsx`)를 보여줌
- 닫기 버튼을 누르면 메인 페이지로 다시 이동

**심화 과제 구현 화면**

![github-finder-detail](https://user-images.githubusercontent.com/26808056/116850370-829f9600-ac2b-11eb-9ed8-2a3336da7d51.gif)

- localStorage를 이용하여 검색기록 구현(최대 3개까지 저장하고, 이미 저장된 아이디에 대해선 중복저장하지 않도록 구현)
- 이미 검색되었던 `userId`는 `useSWR`을 이용하여 캐싱하여 따로 api call을 추가로 하지 않음
- status에 따른 view 추가 (swr의 `!data`, `error` 이용)
- 폴더 구조 수정 (Card 컴포넌트 common 폴더로 분리)
- 스타일링 추가

**📚 사용 스택**

- next.js
- typescript
- swr

**🗂 폴더 구조**

```
github-finder
├─ components
│  ├─ common
│  │  ├─ Card.tsx
│  │  └─ index.ts
│  ├─ result
│  │  └─ UserCard.tsx
│  ├─ SearchBar.tsx
│  └─ index.ts
├─ lib
│  └─ api
│     └─ index.ts
├─ pages
│  ├─ result
│  │  └─ index.tsx
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ index.scss
│  └─ index.tsx
├─ public
│  └─ images
├─ styles
│  ├─ global-style.ts
│  ├─ styled.d.ts
│  └─ theme.ts
├─ types
│  └─ index.ts
├─ README.md
├─ next-env.d.ts
├─ next.config.js
├─ package.json
├─ tsconfig.json
└─ yarn.lock

```
