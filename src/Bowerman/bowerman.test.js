import Bowman from './bowerman.js';

test('Проверка ввода имени', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bo',
    type: 'Bowman',
  };

  const received = new Bowman('Bo');

  expect(received).toEqual(expected);
});
