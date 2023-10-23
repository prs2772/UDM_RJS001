//export default [
export const heroes = [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  },
  {
      id: 3,
      name: 'Superman',
      owner: 'DC'
  },
  {
      id: 4,
      name: 'Flash',
      owner: 'DC'
  },
  {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel'
  },
];

const names = heroes.map(h => h.name);
const owners = heroes.map(h => h.owner);

const getHeroById = heroId => heroes.find(h => h.id === heroId);
const getHerosByOwner = herosOwner => heroes.filter(h => h.owner === herosOwner);
const getHeroByName = heroName => heroes.find(h => h.name === heroName);

//export default heroes;
export {
  heroes as default,
  names,
  owners,
  getHeroById,
  getHeroByName,
  getHerosByOwner,
}
