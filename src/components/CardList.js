import React from "react";
import Card from "./Card";

const CardList = (props) => {
  //데이터 header에 맞게 필터링
  //props: 렌더링(커밋/레포) 타입, data

  const clickHandler = (repo) => {
    //repo list에서 특정 repo 클릭 시->type 'repo'로 변경
    if (props.main.selected === "repo") {
      props.onListChange();
    }
  };
  return (
    <>
      {props.datas
        .filter((data) => data.type === props.main.selected)
        .map((data) => (
          <Card data={data} main={props.main} onClick={clickHandler} />
        ))}
    </>
  );
};
export default CardList;
