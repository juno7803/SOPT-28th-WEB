import { client } from ".";

const postCard = async (body) => {
  const data = await client.post("/posts", { data: body });
};

export default { postCard };
