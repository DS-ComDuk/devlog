import React from "react";
import classes from "../templates/UserBar.module.css";
import github from "../GitHub-Mark-32px.png";
//react-rounded-image

const UserBar = (props) => {
  //user github 주소
  //username
  //user introduction
  //github 잔디
  //stack
  return (
    <div className={classes.side}>
      <a href="github 주소">
        <img src={github} alt="github" />
      </a>
      <div>
        <img
          className={classes.img__profile}
          src="https://i.natgeofe.com/n/8071137b-2890-4ded-8420-41e3485b1eb9/domestic-cat.jpg?w=374&h=249"
          alt="기본"
        />
      </div>
      <h2>username</h2>
      <p>
        introduce yourself:It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
      </p>
      <div className={classes.github}>깃허브 잔디</div>
      <br />
      <hr />
      <br />
      <div>기술 스택</div>
    </div>
  );
};

export default UserBar;
