import Ember from 'ember';

export function decorateNumber([number], { yell } = {}) {
  let character = characterForNumber(number);
  let string = `${character} ${number} ${character}`;

  if (yell) {
    return Ember.String.htmlSafe(`<strong>${string}</strong>`);
  }

  return string;
}

function characterForNumber(number) {
  if (number === 0) {
    return ':(';
  }

  if (number === 1) {
    return '😀';
  }

  return '🔥';
}

export default Ember.Helper.helper(decorateNumber);
