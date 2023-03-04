const LATEST_VER_URL = "https://ddragon.leagueoflegends.com/api/versions.json";

export const getLatestVersion = async () => {
  const res = await fetch(LATEST_VER_URL);
  const versions = await res.json();

  return versions[0];
};
