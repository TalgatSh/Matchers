import sortByHealth, { heroes } from '../index';

test('check sort', () => {
  const result = sortByHealth(heroes);
  expect(result).toEqual(
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  );
});
