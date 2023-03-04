const SQUARE_ASSET_URL =
  "http://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/";

const Champ = ({ champs, setIndivData }) => {
  const setCurrentChamp = (champ) => {
    setIndivData(champ);
  };

  return (
    <div className="champs">
      {Object.entries(champs).map((champ) => (
        <div className="champ-cont" key={champ[1].key}>
          <img
            src={`${SQUARE_ASSET_URL}${champ[1].id}.png`}
            alt={`Loading image of ${champ[1].name}`}
            className="champ-tile"
            onClick={() => setCurrentChamp(champ)}
          />
        </div>
      ))}
    </div>
  );
};

export default Champ;
