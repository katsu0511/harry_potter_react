import { useQuery } from 'react-query';

const fetchCharacters = async () => {
  const res = await fetch(`https://hp-api.onrender.com/api/characters`);
  if (res.ok){ return res.json(); }
  throw new Error(res.statusText);
};

export default function HarryPotter() {

  const { data } = useQuery('weather', fetchCharacters);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
