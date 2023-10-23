import { getHeroById } from './data/heroes'

const timeoutSec = 3;
/* Code pre Async (works as example)
const promise = new Promise((resolve, reject) => {
  console.log(`Starts...`);
  setTimeout(() => {
    const hero = getHeroById(2);
    //reject('Hero not found');
    resolve(hero);
  }, timeoutSec * 1000);
});
promise.then((hero) => {
  console.log(`Hero: `, hero);
})
.catch(err => console.warn(err));*/

console.log(`---------Async---------`);

const getHeroByIdAsync = (id) => {
  const promise = new Promise((resolve, reject) => {
    console.log(`Starts...`);
    setTimeout(() => {
      const hero = getHeroById(id);
      if(hero)
        resolve(hero);
      else
        reject(`Couldn't get the hero`)
    }, timeoutSec * 1000);
  });
  return promise;
};

getHeroByIdAsync(3)
  .then(hero => console.log(`Hero: `, hero))
  //.catch(err => console.warn(err));
  .catch(console.warn);
  