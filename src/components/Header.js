import React from "react";
import styles from "../templates/headers.module.css";

export const Header = ({type = 'repo', selected = 'repo', name = 'repository name'}) => {
  // type : filter repo none
  // selected : home / repo / none(기본값)
  // name : repository 이름

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        GITSTORY
      </div>
      {(type === 'filter') ?
        <div className={styles.menu}>
          {(selected === 'home') ?
            <>
              <button className={styles.button} style={{fontWeight:'700'}}>home</button>
              <button className={styles.button}>repository</button>
            </>
            :
            <>
              <button className={styles.button}>home</button>
              <button className={styles.button} style={{fontWeight:'700'}}>repository</button>
            </>
          }
        </div>
        :
        (type === 'repo') ?
          <div className={styles.repo}>
            <div className={styles.text}>{name}</div>
          </div>
          :
          <></>
      }

    </div>
  )
}
