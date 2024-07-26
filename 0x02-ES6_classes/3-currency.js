export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  // getter for each attribute
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // setter for each attribute
  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    this._code = code;
  }

  // methode implementation that will return the attributes in the following format name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
