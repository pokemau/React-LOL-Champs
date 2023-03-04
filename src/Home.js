import { useState, useEffect } from "react";

//components
import Champ from "./components/Champ";
import ChampInfo from "./components/ChampInfo";

const latestVersion = "13.4.1";

const API_URL = `http://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/championFull.json`;

const Home = () => {
  const [champs, setChamps] = useState({});
  const [indivData, setIndivData] = useState();

  useEffect(() => {
    const getChampData = async () => {
      const res = await fetch(API_URL);
      const champData = await res.json();

      setChamps(champData.data);
    };
    getChampData();

    return () => {
      getChampData();
    };
  }, []);

  return (
    <div className="body-container">
      <div className="left-container">
        <Champ champs={champs} setIndivData={setIndivData} />
      </div>

      <div className="right-container">
        {indivData && <ChampInfo indivData={indivData} />}
      </div>
    </div>
  );
};

export default Home;
