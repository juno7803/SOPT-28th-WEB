### ππ»ββοΈ 3μ°¨ κ³Όμ  GithubFinder

[π μ€νν΄λ³΄κΈ°](https://github-finder-7pj0ihhwr-juno7803.vercel.app/)

**κΈ°λ³Έ κ³Όμ  κ΅¬ν νλ©΄**

![githubFinder](https://user-images.githubusercontent.com/26808056/116347333-f7876000-a826-11eb-9d08-bc0cec2ef4e3.gif)

- λ©μΈ νμ΄μ§(`index.html/3000`) μμ `SearchBar.tsx` λΆλ¬μ΄, μμ΄λ μλ ₯ μ `result/userId ` λ‘ μ΄λ
- κ²°κ³Ό νμ΄μ§(`localhost:3000/result/userId?=${userId}`) λ‘ μ΄λνμ¬ κ²°κ³Ό(`UserCard.tsx`)λ₯Ό λ³΄μ¬μ€
- λ«κΈ° λ²νΌμ λλ₯΄λ©΄ λ©μΈ νμ΄μ§λ‘ λ€μ μ΄λ

**μ¬ν κ³Όμ  κ΅¬ν νλ©΄**

![github-finder-detail](https://user-images.githubusercontent.com/26808056/116850370-829f9600-ac2b-11eb-9ed8-2a3336da7d51.gif)

- localStorageλ₯Ό μ΄μ©νμ¬ κ²μκΈ°λ‘ κ΅¬ν(μ΅λ 3κ°κΉμ§ μ μ₯νκ³ , μ΄λ―Έ μ μ₯λ μμ΄λμ λν΄μ  μ€λ³΅μ μ₯νμ§ μλλ‘ κ΅¬ν)
- μ΄λ―Έ κ²μλμλ `userId`λ `useSWR`μ μ΄μ©νμ¬ μΊμ±νμ¬ λ°λ‘ api callμ μΆκ°λ‘ νμ§ μμ
- statusμ λ°λ₯Έ view μΆκ° (swrμ `!data`, `error` μ΄μ©)
- ν΄λ κ΅¬μ‘° μμ  (Card μ»΄ν¬λνΈ common ν΄λλ‘ λΆλ¦¬)
- μ€νμΌλ§ μΆκ°

**π μ¬μ© μ€ν**

- next.js
- typescript
- swr

**π ν΄λ κ΅¬μ‘°**

```
github-finder
ββ components
β  ββ common
β  β  ββ Card.tsx
β  β  ββ index.ts
β  ββ result
β  β  ββ UserCard.tsx
β  ββ SearchBar.tsx
β  ββ index.ts
ββ lib
β  ββ api
β     ββ index.ts
ββ pages
β  ββ result
β  β  ββ index.tsx
β  ββ _app.tsx
β  ββ _document.tsx
β  ββ index.scss
β  ββ index.tsx
ββ public
β  ββ images
ββ styles
β  ββ global-style.ts
β  ββ styled.d.ts
β  ββ theme.ts
ββ types
β  ββ index.ts
ββ README.md
ββ next-env.d.ts
ββ next.config.js
ββ package.json
ββ tsconfig.json
ββ yarn.lock

```
