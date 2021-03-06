# ๐ Diary App

## ๐๐ปโโ๏ธ ์์ํ๊ธฐ

```bash
yarn dev # run next project
npx json-server --watch data.json --port 4000 # run json server
```

## ๐ฅ ๊ตฌํ ํ๋ฉด

### 1๏ธโฃ ์นด๋ ์ถ๊ฐํ๊ธฐ

![add_card_diaryapp](https://user-images.githubusercontent.com/26808056/120882304-c104e800-c611-11eb-826b-598f0b8871cb.gif)

```tsx
// (1) ๋ถ๋ณ์ฑ์ ์งํค๊ธฐ ์ํด spread ๋ฌธ๋ฒ์ ์ฌ์ฉํ์ฌ ๊น์ ๋ณต์ฌ๋ฅผ ํตํด ๊ตฌํ
const newData = user[year][month].concat(cardForm);
const userData = {
  ...user,
  [year]: {
    ...user[year],
    [month]: newData,
  },
};
await post.postCard(userData); // post ์์ฒญ
mutate("/posts", userData); // swr์ mutate ํจ์๋ฅผ ํตํด ์๋์ผ๋ก revalidation ํ์ฌ optimistic ui ์ ์ฉํ  ํ์ ์์
```

```bash
yarn add lodash @types/lodash
```

```tsx
// (2) ๋ถ๋ณ์ฑ์ ์งํค๊ธฐ ์ํด js ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ธ lodash๋ฅผ ์ฌ์ฉํ์ฌ ๊น์ ๋ณต์ฌ๋ฅผ ํตํด ๊ตฌํ
import { cloneDeep } from "lodash";

const userData = cloneDeep(user); // user ๊ฐ์ฒด๋ฅผ ๊น์ ๋ณต์ฌํ์ฌ userData์ ์ ์ฅ
userData[year][month].push(cardForm); // userData[year][month] ํ๋กํผํฐ์ cardForm push๋ก ์ถ๊ฐ
await post.postCard(userData);
mutate("/posts", userData);
```

### 2๏ธโฃ ์นด๋ ์ญ์ ํ๊ธฐ

![delete_card_diaryapp](https://user-images.githubusercontent.com/26808056/120882309-c3ffd880-c611-11eb-8215-54f6b332de29.gif)

### 3๏ธโฃ ์นด๋ ์์ ํ๊ธฐ

![edit_card_diaryapp](https://user-images.githubusercontent.com/26808056/120882314-c6623280-c611-11eb-918a-984f0b33230e.gif)

```tsx
const [isReadOnly, setIsReadOnly] = useState(true); // isReadOnly๋ฅผ state๋ก ๋์ด ๋ผ์ฐํ์ ์ถ๊ฐ๋ก ํ์ง ์๊ณ  ๊ตฌํ
```

### ๊ทธ ์ธ ํน์ง

- ์๋ฒ์์ ๋ฐ์์ค๋ global data๋ `useSWR` ์ ์ด์ฉํ์ฌ ๋ฐ์ดํฐ ์บ์ฑ
- post ์์ฒญ์ ๋ํด์๋ `axios ` ๋ง์ ์ด์ฉํ๋, SWR์ mutate๋ฅผ ์ด์ฉํ์ฌ ๋ฐ์ดํฐ ๊ฐฑ์ 
- `SWRConfig`๋ฅผ ์ด์ฉํ์ฌ ๊ณตํต default ์ต์์ ์ง์ ํ์ฌ ์ฌ์ฉ
- local global state๋ recoil๋ก ๊ด๋ฆฌ(`date`)

## ๐ ์ฌ์ฉ ์คํ

```bash
React.js
Next.js
Typescript
SWR
Recoil
```

## ๐ ํด๋ ๊ตฌ์กฐ

```plain text
diary-app
โโ assets
โ  โโ index.ts
โ  โโ left.svg
โ  โโ leftoff.svg
โ  โโ menu.svg
โ  โโ photo.svg
โ  โโ profile_img.svg
โ  โโ right.svg
โ  โโ rightoff.svg
โ  โโ select.svg
โโ components
โ  โโ common
โ  โ  โโ Calender.tsx
โ  โ  โโ Container.tsx
โ  โ  โโ Footer.tsx
โ  โ  โโ Header.tsx
โ  โ  โโ Title.tsx
โ  โโ diary
โ  โ  โโ CardHeader.tsx
โ  โ  โโ CardInfo.tsx
โ  โ  โโ DiaryCard.tsx
โ  โโ main
โ  โ  โโ Card.tsx
โ  โ  โโ NewCard.tsx
โ  โโ index.ts
โโ lib
โ  โโ api
โ  โ  โโ index.ts
โ  โ  โโ post.ts
โ  โโ utils
โ     โโ date.ts
โโ pages
โ  โโ diary
โ  โ  โโ [id].tsx
โ  โโ _app.tsx
โ  โโ _document.tsx
โ  โโ index.scss
โ  โโ index.tsx
โโ public
โ  โโ favicon.ico
โ  โโ vercel.svg
โโ states
โ  โโ index.ts
โโ styles
โ  โโ global-style.ts
โ  โโ styled.d.ts
โ  โโ theme.ts
โโ types
โ  โโ index.ts
โโ README.md
โโ data.json
โโ index.d.ts
โโ next-env.d.ts
โโ next.config.js
โโ package-lock.json
โโ package.json
โโ tsconfig.json
โโ yarn.lock
```
