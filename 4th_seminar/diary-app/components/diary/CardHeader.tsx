import { useRouter } from "next/router";
import React from "react";
import Styled from "styled-components";

interface ICardHeader {
  title: string;
  isReadOnly: boolean;
  handleChange: (e: any) => void;
  handleEdit: () => void;
  handleDelete: () => void;
  setIsReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardHeader = ({
  title,
  isReadOnly,
  handleChange,
  handleEdit,
  handleDelete,
  setIsReadOnly,
}: ICardHeader) => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <CardHeaderWrap>
      <input
        type="text"
        name="title"
        className="header__title"
        placeholder="제목을 입력해 주세요"
        value={title}
        readOnly={isReadOnly}
        onChange={handleChange}
      />
      <div className="header__empty"></div>
      {isReadOnly ? (
        <button className="header__edit" onClick={() => setIsReadOnly(false)}>
          수정
        </button>
      ) : (
        <button className="header__edit" onClick={handleEdit}>
          완료
        </button>
      )}
      {isReadOnly ? (
        <button className="header__delete" onClick={handleDelete}>
          삭제
        </button>
      ) : (
        ""
      )}
    </CardHeaderWrap>
  );
};

export default CardHeader;

const CardHeaderWrap = Styled.div`
  display: flex;
  align-items: flex-end;
  width: 642px;
  height: 83px;
  border-bottom: 2px solid #CEA0E3;
  margin: 0 auto;
  padding-bottom: 10px;
  .header {
    &__title {
      margin: 0;
      font-size: 28px;
      font-weight: bold;
      border: none;
      background: none;
      &::placeholder {
        color: #C4C4C4;
      }
      &:focus {
        outline: none;
      }
    }
    &__empty {
      flex: 1;
    }
    &__edit {
      color: #CEA0E3;
    }
  }
  button {
    border: none;
    background: none;
    font-size: 18px;
    font-weight: bold;
    padding: 0;
    width: 40px;
    text-align: center;
    margin-left: 7px;
  }
  button:hover {
    cursor: pointer;
  }
`;
