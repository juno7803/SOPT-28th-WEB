import { client } from "../lib/api";
import { UserCard } from "../components";

const Result = ({ data }) => {
  return (
    <>
      <UserCard userData={data} />
    </>
  );
};

export default Result;

// localhost:3000/result
export const getStaticProps = async () => {
  const { data } = await client.get(`/juno7803`);
  return {
    props: {
      data,
    },
  };
};
