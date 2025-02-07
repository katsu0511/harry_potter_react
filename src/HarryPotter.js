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
          <div className='image_frame'>
            <img src={item.image} alt={item.name} />
          </div>
          <div className='details'>
            <h2>{item.name}</h2>
            {item.gender && <p>{item.gender}</p>}
            {item.dateOfBirth && <p>{item.dateOfBirth}</p>}
            <p>{item.wizard ? 'wizard' : 'not wizard'}</p>
          </div>
        </div>
        <div className='other_info'>
          <h3>Other info</h3>
          {item.hogwartsStudent && <p>hogwarts student</p>}
          {item.hogwartsStaff && <p>hogwarts staff</p>}
          {item.species && <p>Species: {item.species}</p>}
          {item.house && <p>House: {item.house}</p>}
          {item.ancestry && <p>Ancestry: {item.ancestry}</p>}
          {item.eyeColour && <p>Eye Color: {item.eyeColour}</p>}
          {item.hairColour && <p>Hair Color: {item.hairColour}</p>}
          {item.actor && <p>Actor: {item.actor}</p>}
          {item.patronus && <p>Patronus: {item.patronus}</p>}
          {
            item.wand.wood && item.wand.core && item.wand.length &&
            <div className='wand'>
              <h4>Wand</h4>
              <ul>
                {item.wand.wood && <li>{item.wand.wood}</li>}
                {item.wand.core && <li>{item.wand.core}</li>}
                {item.wand.length && <li>{item.wand.length}</li>}
              </ul>
            </div>
          }
        </div>
      </div>
    );
  });

  return (
    <main>
      <header>
        <h1>Harry Potter characters</h1>
      </header>
      <section className='characters'>{characters}</section>
    </main>
  );
}
