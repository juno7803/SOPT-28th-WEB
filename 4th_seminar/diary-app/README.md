# 📔 Diary App

## 🏃🏻‍♂️ 시작하기

```bash
yarn dev # run next project
npx json-server --watch data.json --port 4000 # run json server
```

## 🖥 구현 화면

### 1️⃣ 카드 추가하기

![add_card_diaryapp](https://user-images.githubusercontent.com/26808056/120882304-c104e800-c611-11eb-826b-598f0b8871cb.gif)

```tsx
const userData = {
  ...user,
  [year]: {
    ...user[year],
    [month]: [...user[year][month], cardForm],
  },
}; // 불변성을 지키기 위해 배열을 복사하여 사용
await post.postCard(userData); // post 요청
mutate("/posts", userData); // swr의 mutate 함수를 통해 자동으로 revalidation 하여 optimistic ui 적용할 필요 없음
```

### 2️⃣ 카드 삭제하기

![delete_card_diaryapp](https://user-images.githubusercontent.com/26808056/120882309-c3ffd880-c611-11eb-8215-54f6b332de29.gif)

### 3️⃣ 카드 수정하기

![edit_card_diaryapp](https://user-images.githubusercontent.com/26808056/120882314-c6623280-c611-11eb-918a-984f0b33230e.gif)

```tsx
const [isReadOnly, setIsReadOnly] = useState(true); // isReadOnly를 state로 두어 라우팅을 추가로 하지 않고 구현
```

### 그 외 특징

- 서버에서 받아오는 global data는 `useSWR` 을 이용하여 데이터 캐싱
- post 요청에 대해서는 `axios ` 만을 이용하되, SWR의 mutate를 이용하여 데이터 갱신
- `SWRConfig`를 이용하여 공통 default 옵션을 지정하여 사용
- local global state는 recoil로 관리(`date`)

## 📚 사용 스택

```bash
React.js
Next.js
Typescript
SWR
Recoil
```

## 🗂 폴더 구조

```plain text
diary-app
├─ assets
│  ├─ index.ts
│  ├─ left.svg
│  ├─ leftoff.svg
│  ├─ menu.svg
│  ├─ photo.svg
│  ├─ profile_img.svg
│  ├─ right.svg
│  ├─ rightoff.svg
│  └─ select.svg
├─ components
│  ├─ common
│  │  ├─ Calender.tsx
│  │  ├─ Container.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  └─ Title.tsx
│  ├─ diary
│  │  ├─ CardHeader.tsx
│  │  ├─ CardInfo.tsx
│  │  └─ DiaryCard.tsx
│  ├─ main
│  │  ├─ Card.tsx
│  │  └─ NewCard.tsx
│  └─ index.ts
├─ lib
│  ├─ api
│  │  ├─ index.ts
│  │  └─ post.ts
│  └─ utils
│     └─ date.ts
├─ pages
│  ├─ diary
│  │  └─ [id].tsx
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ index.scss
│  └─ index.tsx
├─ public
│  ├─ favicon.ico
│  └─ vercel.svg
├─ states
│  └─ index.ts
├─ styles
│  ├─ global-style.ts
│  ├─ styled.d.ts
│  └─ theme.ts
├─ types
│  └─ index.ts
├─ README.md
├─ data.json
├─ index.d.ts
├─ next-env.d.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ yarn.lock
```
