import Undead from './undead.js';

test('Проверка ввода имени', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Und',
    type: 'Undead',
  };

  const received = new Undead('Und');

  expect(received).toEqual(expected);
});
