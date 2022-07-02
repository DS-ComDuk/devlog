import React from "react";
import styles from "../templates/headers.module.css";

export const Header = (props) => {
  // type : filter repo none
  // selected : home / repo / none(기본값)
  // name : repository 이름

  const selectClickHandler = () => {
    if (props.main.selected === "home") props.onSelectedChange("repo");
    else if (props.main.selected === "repo") props.onSelectedChange("home");
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>GITSTORY</div>
      {props.main.type === "filter" ? (
        <div className={styles.menu}>
          {props.main.selected === "home" ? (
            <>
              <button className={styles.button} style={{ fontWeight: "700" }}>
                home
              </button>
              <button className={styles.button} onClick={selectClickHandler}>
                repository
              </button>
            </>
          ) : (
            <>
              <button className={styles.button} onClick={selectClickHandler}>
                home
              </button>
              <button className={styles.button} style={{ fontWeight: "700" }}>
                repository
              </button>
            </>
          )}
        </div>
      ) : props.main.type === "repo" ? (
        <div className={styles.repo}>
          <div className={styles.text}>{props.main.name}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
