import "./home.css";
// import Colors from "./Colors";
// import HaveYourOwn from './HaveYourOwn'

import HeroImg from "../../front.png";

function Home() {
  return (
    <div className="home">
      <img src={HeroImg} alt="image not loaded" style={{ width:"100%",objectFit:"cover" }} />
    </div>
  );
}

export default Home;
