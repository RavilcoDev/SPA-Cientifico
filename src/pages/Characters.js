import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3><b>Episodes:</b> <span>${character.episode.length}</span></h3>
        <h3><b>Status:</b> <span>${character.status}</span></h3>
        <h3><b>Species:</b> <span>${character.species}</span></h3>
        <h3><b>Gender:</b> <span>${character.gender}</span></h3>
        <h3><b>Origin:</b> <span>${character.origin.name}</span></h3>
        <h3><b>Last Location:</b> ${character.location.name}</h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;
