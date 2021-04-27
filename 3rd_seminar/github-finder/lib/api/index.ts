import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.github.com/users",
});

// const getUserData = async (name: string): Promise<IUserData> => {
//   const { data } = await client.get(`/${name}`);
//   return data;
// };

// const getRepos = async (userId: string): Promise<any> => {
//   const { data } = await client.get(`/${userId}/repos`);
//   return data;
// };

// export { getUserData };
