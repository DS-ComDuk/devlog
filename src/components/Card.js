import React from "react";
import classes from "../templates/Card.module.css";

const Card = (props) => {
  //main에서의 selected 타입(home, repo) +repo라면, repo 이름
  //repo나 commit 이름
  //repo description이나 commit message 메모
  //프로그래밍 언어 정보
  //update 날짜

  return (
    <div className={classes.card} onClick={props.onClick}>
      <h2>{props.data.title}</h2>
      <p>description:{props.data.description}</p>
      <div>
        <p>html</p>
        <p>Updated on 16 Jan</p>
      </div>
    </div>
  );
};

export default Card;
