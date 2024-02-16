const typeClass = {
  Bowman: { attack: 25, defence: 25 },
  Swordsman: { attack: 40, defence: 10 },
  Magician: { attack: 10, defence: 40 },
  Daemon: { attack: 25, defence: 25 },
  Undead: { attack: 40, defence: 10 },
  Zombie: { attack: 10, defence: 40 },
};
export default class Character {
  constructor(name, type, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! Имя должно содержать от 2 до 10 символов.');
    }

    this.name = name.toString();

    if (!(type in typeClass)) {
      throw new Error('Данного класса не существует.');
    }

    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = typeClass[type].attack;
    this.defence = typeClass[type].defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Ошибка! Нельзя повысить левел умершего.');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
