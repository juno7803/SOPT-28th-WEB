import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com/users",
});

const getUserData = async (name: string) => {
  const { data }: any = await client.get(`/${name}`);
  return data;
};

export { getUserData };
