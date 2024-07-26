import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // using eslint-disable-next-line the class-methods-use-this
  cloneCar() {
    return new EVCar(
      this.brand,
      this.motor,
      this.color,
      this._range,
    );
  }
}
