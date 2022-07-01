import {Header} from "../components/Header";
import styles from '../templates/MyPage.module.css'

const MyPage = ({history}) => {
  const onChange = () => { }

  return (
    <>
      <Header type={'none'}/>
      <section className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.text}>프로필</div>
        </div>
        <div className={styles.item}>
          <div className={styles.profileBox}>
            <button className={styles.imageButton}>
              <img src={require("../assets/images/profile.png")} width='160px' />
            </button>
            <div className={styles.photoBox}>
              <button className={styles.changePhoto}>사진 변경하기</button>
              <button className={styles.removePhoto}>사진 삭제하기</button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.text} style={{margin: '60px auto'}}>이름</div>
        </div>
        <div className={styles.item}>
          <div className={styles.nameBox}>
            <from>
              <input type="text" id="name" name="name" onChange={onChange} />
            </from>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.text} style={{margin: '75px auto'}}>소개글</div>
        </div>
        <div className={styles.item}>
          <div className={styles.contentBox}>
            <from>
              <textarea type="text" id="content" name="comment" onChange={onChange} />
            </from>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.text} style={{margin: '75px auto'}}>기술<br/>스택</div>
        </div>
        <div className={styles.item}>
          <div className={styles.techBox}>
            <from>
              <textarea type="text" id="content" name="comment" onChange={onChange} />
            </from>
          </div>
        </div>
      </section>
      <div className={styles.submitBox}>
        <button className={styles.submit}>설정</button>
      </div>

    </>
  )
}

export default MyPage;
