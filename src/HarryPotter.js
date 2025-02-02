import { useQuery } from 'react-query';

const fetchCharacters = async () => {
  const res = await fetch(`https://hp-api.onrender.com/api/characters`);
  if (res.ok){ return res.json(); }
  throw new Error(res.statusText);
};

export default function HarryPotter() {

  const { data } = useQuery('characters', fetchCharacters);

  const characters = [];
  data.forEach((item) => {
    characters.push(
      <div>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    );
  });

  return (
    <div className='characters'>
      {characters}
    </div>
  );
}
