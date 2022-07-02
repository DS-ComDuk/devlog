import React, { useState } from "react";
import { Header } from "../components/Header";
import UserBar from "../components/UserBar";
import CardList from "../components/CardList";

const DUMMY__data = [
  {
    type: "repo",
    title: "my repo",
    description: "이건 레포라구여",
    language: ["html"],
    date: "2022-05-09",
  },
  {
    type: "home",
    repo_name: "my repo",
    title: "first commit memo",
    description:
      "이 커밋은 내가 처음 프로젝트를 만들면서 한 커밋으로 아무것도 없다고 한다",
    language: ["javascript"],
    date: "2022-05-11",
  },
];

const HomePage = () => {
  const [main, setMain] = useState({
    type: "filter",
    selected: "home",
    name: "repository name",
  });
  // type : filter repo none
  // selected : home / repo / none(기본값)
  // name : repository 이름

  const [datas, setDatas] = useState(DUMMY__data);
  const selectedChangeHandler = (s) => {
    setMain((prev) => {
      return { ...prev, selected: s };
    });
  };

  const listChangeHandler = () => {
    //header state(type, selected, name) 변화 시 출력되는 list 변경
    setMain((prev) => {
      return { ...prev, type: "repo", name: "repository name" };
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="page">
        <Header main={main} onSelectedChange={selectedChangeHandler} />
        <CardList datas={datas} main={main} onListChange={listChangeHandler} />
      </div>
      <UserBar />
    </div>
  );
};

export default HomePage;
