export default class Character {
  constructor(name, type) {
    this.arrClass = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    this.name = name;
    this.type = type;
    this.health = '100';
    this.level = '1';
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
}
