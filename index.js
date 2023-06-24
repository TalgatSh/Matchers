export default function sortByHealth(heroes) {
  heroes.sort((x, y) => y.health - x.health);
  return heroes;
}

export const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
