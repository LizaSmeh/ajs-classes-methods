import Swordsman from './swordsman.js';

test('Проверка ввода имени', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Swo',
    type: 'Swordsman',
  };

  const received = new Swordsman('Swo');

  expect(received).toEqual(expected);
});
