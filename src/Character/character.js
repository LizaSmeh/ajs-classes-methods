const typeClass = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! Имя должно содержать от 2 до 10 символов.');
    }

    if (!(typeClass.includes(type))) {
      throw new Error('Данного класса не существует.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
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
    this.health = (this.health > 0) ? this.health : 0;
  }
}
