import heroes, { names, owners } from './data/heroes'

const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
}
const getHeroByName = (heroName) => heroes.find((hero) => hero.name === heroName);
const getHeroByOwner = heroOwner => heroes.filter(hero => hero.owner === heroOwner);

const heroTwo = getHeroById(2);
console.log(heroTwo);
console.log(getHeroByName('Flash'));
console.log(getHeroByOwner('Marvel'));
console.log(names);
console.log(owners);
