import { IUserData } from "../../types";

interface IUserCardProps {
  userData: IUserData;
}

const UserCard = ({ userData }: IUserCardProps) => {
  return (
    <>
      {userData && (
        <>
          <h2>{userData.bio}</h2>
          <img src={userData.avatar_url} />
        </>
      )}
    </>
  );
};

export default UserCard;
