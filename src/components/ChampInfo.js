const latestVersion = "13.4.1";

const LOADING_URL =
  "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

const PASSIVE_URL = `http://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/passive/`;

const SKILL_URL = `http://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/spell/`;

const ChampInfo = ({ indivData }) => {
  //basic stats
  const champId = indivData[1].id;
  const champStat = indivData[1].stats;
  const champName = indivData[1].name;
  const champTitle = indivData[1].title;
  //passive
  const passiveImageName = indivData[1].passive.image.full;
  const passiveDesc = indivData[1].passive.description;
  const passiveName = indivData[1].passive.name;
  //skills
  const skills = indivData[1].spells;

  return (
    <div className="champ-info-container">
      <div className="basic-info">
        <img
          className="champ-loading-img"
          src={`${LOADING_URL}${champId}_0.jpg`}
          alt={champId}
        />

        <div className="champ-stats">
          <div className="name-title">
            <h1>{champName}</h1>
            <h3>{champTitle}</h3>
          </div>
          <p>{`HP: ${champStat.hp}`}</p>
          <p>{`MANA: ${champStat.mp}`}</p>
          <p>{`HP REGEN: ${champStat.hpregen}`}</p>
          <p>{`ARMOR: ${champStat.armor}`}</p>
          <p>{`MAGIC RESIST: ${champStat.spellblock}`}</p>
        </div>
      </div>

      <div className="champ-skills-container">
        <div className="passive-container">
          <div className="passive-info">
            <img
              src={`${PASSIVE_URL}${passiveImageName}`}
              alt={`${champName} passive`}
            />
            <h2>{passiveName}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: passiveDesc }}></p>
        </div>

        <div className="champ-skills">
          {skills.map((skill) => (
            <div key={skill.id} className="skills-info-container">
              <div className="skill-infos">
                <img src={`${SKILL_URL}${skill.image.full}`} alt="" />
                <div className="skillname">
                  <h2
                    dangerouslySetInnerHTML={{ __html: `${skill.name}` }}></h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `Cooldown: ${skill.cooldownBurn}`,
                    }}></p>
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${skill.description}`,
                }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampInfo;
