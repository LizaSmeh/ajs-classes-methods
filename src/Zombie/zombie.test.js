import Zombie from './zombie.js';

test('Проверка ввода имени', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Zom',
    type: 'Zombie',
  };

  const received = new Zombie('Zom');

  expect(received).toEqual(expected);
});
