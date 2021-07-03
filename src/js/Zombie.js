import Character from './character';

export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = '40';
    this.defence = '10';
  }
}
