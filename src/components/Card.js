import React from "react";
import classes from "../templates/Card.module.css";

const Card = (props) => {
  //repo나 commit 이름
  //repo description이나 commit message 메모
  //프로그래밍 언어 정보
  //update 날짜
  return (
    <div className={classes.card}>
      <h2>repository name/commit message</h2>
      <p>
        description:Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <div>
        <p>html</p>
        <p>Updated on 16 Jan</p>
      </div>
    </div>
  );
};

export default Card;
