import {Header} from "../components/Header";
import Card from "../components/Card";
import UserBar from "../components/UserBar";

const HomePage = () => {
  return (
    <div style={{display: 'flex'}}>
      <div className="page">
        <Header/>
        <Card/>
      </div>
      <UserBar/>
    </div>
  )
}

export default HomePage;
