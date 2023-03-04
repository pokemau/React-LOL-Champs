import JsonData from "./assets/LOL_Info/champ_info/championFull.json";

import { useState } from "react";

//components
import Champ from "./Champ";
import ChampInfo from "./ChampInfo";

const API_URL =
  "http://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json";

const Home = () => {
  async function getChampData() {
    const res = await fetch(API_URL);
    const champData = await res.json();

    return champData;
  }

  async function showData() {
    const champData = await getChampData();

    console.log(champData);
  }

  return (
    <div>
      <button onClick={showData}>CLICK</button>
      <h1>hello</h1>
    </div>
  );

  // const champData = JsonData.data;

  // //current champion clicked
  // const [indivData, setIndivData] = useState();

  // return (
  //   <div className="body-container">
  //     <div className="left-container">
  //       <Champ champData={champData} setIndivData={setIndivData}/>
  //     </div>

  //     <div className="right-container">
  //       {indivData && <ChampInfo indivData={indivData}/>}
  //     </div>
  //   </div>
  // );
};

export default Home;
