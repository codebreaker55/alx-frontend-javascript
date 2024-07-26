import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for the floors attribute
  get floors() {
    return this._floors;
  }

  // override method that return the following string Evacuate slowly the NUMBER_OF_FLOORS floors
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
