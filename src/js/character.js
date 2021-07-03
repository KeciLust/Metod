export default class Character {
  constructor(name, type) {
    this.arrClass = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.err();
  }

  err() {
    if (!this.name) {
      throw new Error('Введите имя!');
    } else if (this.name.length < 2) {
      throw new Error('Слишком короткое имя!');
    } else if (this.name.length > 10) {
      throw new Error('Слишком длинное имя!');
    } else if (!this.arrClass.includes(this.type)) {
      throw new Error('Введите существующий класс!');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('ваш герой погиб!');
    }
    // eslint-disable-next-line no-plusplus
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('ваш герой погиб!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
