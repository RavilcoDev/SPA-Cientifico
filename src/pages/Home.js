import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();

  const view = await `
    <div class="Characters">
      ${characters.results
        .map(
          character => `
          <article class="Characters-item">
            <a href="#/${character.id}">
              <img src="${character.image}" alt="${character.name}">
              <div class="Characters-item-detail">
                <h2>${character.name}</h2>
              </div>
            </a>
          </article>
      `
        )
        .join('')}
    <div>
    `;
  return view;
};

export default Home;
