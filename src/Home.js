import JsonData from "./assets/LOL_Info/champ_info/championFull.json";

import { useState, useEffect } from "react";

//components
import Champ from "./Champ";
import ChampInfo from "./ChampInfo";

const API_URL =
  "http://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json";

const Home = () => {
  const [champs, setChamps] = useState({});

  useEffect(() => {
    const getChampData = async () => {
      const res = await fetch(API_URL);
      const champData = await res.json();

      setChamps(champData.data);
    };

    return () => {
      getChampData();
    };
  }, []);

  function showData() {
    console.log(champs);
  }

  const champData = JsonData.data;

  //current champion clicked
  const [indivData, setIndivData] = useState();

  return (
    <div className="body-container">
      <div className="left-container">
        <Champ champs={champs} setIndivData={setIndivData} />
      </div>

      <div>
        <button onClick={showData}>CLICK</button>
        <h1>hello</h1>
      </div>

      {/* <div className="right-container">
        {indivData && <ChampInfo indivData={indivData} />}
      </div> */}
    </div>
  );
};

export default Home;
