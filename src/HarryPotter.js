import { useQuery } from 'react-query';
import './HarryPotter.css';

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
      <div className='character' key={item.id}>
        <div className='top_info'>
          <img src={item.image} alt={item.name} />
          <div className='details'>
            <h2>{item.name}</h2>
            <p>{item.gender}</p>
            <p>{item.dateOfBirth}</p>
            <p>{item.wizard === true ? 'wizard' : 'not wizard'}</p>
          </div>
        </div>
        <div className='other_info'>
          <h3>Other info</h3>
          {item.hogwartsStudent && <p>hogwarts student</p>}
          {item.hogwartsStaff && <p>hogwarts staff</p>}
          <p>Species: {item.species}</p>
          <p>House: {item.house}</p>
          <p>Ancestry: {item.ancestry}</p>
          <p>Eye Color: {item.eyeColour}</p>
          <p>Hair Color: {item.hairColour}</p>
          <p>Actor: {item.actor}</p>
          <p>Patronus: {item.patronus}</p>
          <h4>Wand</h4>
          <ul>
            <li>{item.wand.wood}</li>
            <li>{item.wand.core}</li>
            <li>{item.wand.length}</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <main>
      <h1>Harry Potter characters</h1>
      <section className='characters'>{characters}</section>
    </main>
  );
}
