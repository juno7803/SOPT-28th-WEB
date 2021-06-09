import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { CardHeader, CardInfo } from "../";
import post from "../../lib/api/post";
import { ICardForm, IDiary } from "../../types";
import { useRecoilValue } from "recoil";
import { dateState } from "../../states";
import { mutate } from "swr";

interface IDiaryCard {
  data: ICardForm;
  rawData: IDiary;
}

const DiaryCard = ({ data, rawData }: IDiaryCard) => {
  const router = useRouter();
  const { year, month } = useRecoilValue(dateState);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const id = router.query.id as string;

  const [state, setState] = useState<ICardForm>(data);
  const [userImg, setUserImg] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChangeFile = (event) => {
    let reader = new FileReader();
    const data = event.target.files[0]; // 받아온 이미지는 여기에 File 객체로 저장됩니다

    if (data) {
      reader.readAsDataURL(data);
    }
    reader.onloadend = () => {
      setUserImg({
        file: data,
        preview: reader.result,
      });
      // 미리보기 이미지 변경을 위한 state
      setState({ ...state, image: reader.result as string });
    };
  };

  const handleEdit = async () => {
    const newData = rawData[year][month].map((e: ICardForm) =>
      e.id === parseInt(id) ? state : e
    );
    const editData = {
      ...rawData,
      [year]: {
        ...rawData[year],
        [month]: newData,
      },
    };
    await post.postCard(editData);
    setIsReadOnly(true);
  };

  const handleDelete = async () => {
    const filteredList = rawData[year][month].filter(
      (data: ICardForm) => data.id !== parseInt(id)
    );
    rawData[year][month] = filteredList;
    await post.postCard(rawData);
    router.back();
  };

  return (
    <Card.Wrap>
      <CardHeader
        title={state.title}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        setIsReadOnly={setIsReadOnly}
      />
      <CardInfo
        cardData={state}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
        handleChangeFile={handleChangeFile}
        userImg={userImg}
      />
      <textarea
        placeholder="오늘을 기록해 주세요"
        readOnly={isReadOnly}
        value={state.text}
        name="text"
        onChange={handleChange}
      />
    </Card.Wrap>
  );
};

export default DiaryCard;

const Card = {
  Wrap: styled.div`
    width: 785px;
    height: 600px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    textarea {
      width: 642px;
      height: 219px;
      background-color: #efefef;
      font-size: 18px;
      resize: none;
      font-family: Roboto;
      border: none;
      padding: 14px;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #c4c4c4;
      }
    }
  `,
};
