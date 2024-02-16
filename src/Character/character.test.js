import Character from './character.js';

test('Проверка ввода имени', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'lizi',
    type: 'Bowman',
  };

  const received = new Character('lizi', 'Bowman');

  expect(received).toEqual(expected);
});

test('Проверка длины имени < 2 символов', () => {
  expect(() => {
    const character = new Character('L', 'Bowman');
    character();
  }).toThrowError('Ошибка! Имя должно содержать от 2 до 10 символов.');
});

test('Проверка длины имени > 10 символов', () => {
  expect(() => {
    const character = new Character('LizzziiiBriziiii', 'Bowman');
    character();
  }).toThrowError('Ошибка! Имя должно содержать от 2 до 10 символов.');
});

test('Проверка типа', () => {
  expect(() => {
    const character = new Character('Lizi', 'Noliza');
    character();
  }).toThrowError('Данного класса не существует.');
});

test('Проверка жизни', () => {
  expect(() => {
    const received = new Character('Name', 'Bowman', 0);
    received.levelUp();
  }).toThrowError('Ошибка!');
});

test('Повышение уровня', () => {
  const received = new Character('lizi', 'Bowman');
  received.levelUp();
  expect(received.level).toEqual(2);
});

test('Восстановление здоровья', () => {
  const received = new Character('lizi', 'Bowman');
  received.health = 20;
  received.levelUp();
  expect(received.health).toEqual(100);
});

test('Увеличение аттак', () => {
  const received = new Character('lizi', 'Bowman');
  received.levelUp();
  expect(received.attack).toEqual(30);
});

test('Увеличение обороны', () => {
  const received = new Character('lizi', 'Bowman');
  received.levelUp();
  expect(received.defence).toEqual(30);
});

test('Уменьшение здоровья', () => {
  const received = new Character('lizi', 'Bowman');
  received.damage(100);
  expect(received.health).toEqual(25);
});

test('Здоровье на 0', () => {
  const received = new Character('lizi', 'Bowman', 0);
  received.damage(100);
  expect(received.health).toEqual(0);
});
