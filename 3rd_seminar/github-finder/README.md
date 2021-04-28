### 🙆🏻‍♂️ 3차 과제 GithubFinder

**기본 과제 구현 화면**
![githubFinder](https://user-images.githubusercontent.com/26808056/116347333-f7876000-a826-11eb-9d08-bc0cec2ef4e3.gif)

- 메인 페이지('index.html/3000') 에서 `SearchBar.tsx` 불러옴, 아이디 입력 시 `result/userId ` 로 이동
- 결과 페이지(`localhost:3000/result/userId?=${userId}`) 로 이동하여 결과(`UserCard.tsx`)를 보여줌
- 닫기 버튼을 누르면 메인 페이지로 다시 이동

**📚 사용 스택**

- next.js
- typescript
- swr

**🗂 폴더 구조**

```
github-finder
├─ components
│  ├─ result
│  │  └─ UserCard.tsx
│  ├─ SearchBar.tsx
│  └─ index.ts
├─ lib
│  └─ api
│     └─ index.ts
├─ pages
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ index.scss
│  ├─ index.tsx
│  └─ result.tsx
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
