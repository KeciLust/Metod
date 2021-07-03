/* eslint-disable no-unused-vars */
import Character from '../character';

test('Small name', () => {
  function char() { const character = new Character('I', 'Bowman'); }

  expect(char).toThrowError(new Error('Слишком короткое имя!'));
});
test('Long name', () => {
  function char() { const character = new Character('ImVeryLongName', 'Bowman'); }

  expect(char).toThrowError(new Error('Слишком длинное имя!'));
});
test('Absent name', () => {
  function char() { const character = new Character('', 'Bowman'); }

  expect(char).toThrowError(new Error('Введите имя!'));
});
test('Class', () => {
  function char() { const character = new Character('ImName', 'B'); }

  expect(char).toThrowError(new Error('Введите существующий класс!'));
});
test('Hero dead', () => {
  const character = new Character('Denis', 'Bowman');
  character.health = 0;
  function char() {
    character.levelUp();
  }

  expect(char).toThrowError(new Error('ваш герой погиб!'));
});
test('Hero dead 2', () => {
  const character = new Character('Denis', 'Bowman');
  character.health = 0;
  function char() {
    character.damage();
  }

  expect(char).toThrowError(new Error('ваш герой погиб!'));
});
test(`levelUp`, () => {
  const character = new Character(`Denis`, `Bowman`);
  character.levelUp();
  expect(character.level).toBe(2);
});
test(`damage`, () => {
  const character = new Character(`Denis`, `Bowman`);
  character.defence = 25;
  character.damage(100);

  expect(character.health).toBe(25);
});