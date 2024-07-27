import Car from './10-car';

// Define the EVCar class, which extends the Car class
class EVCar extends Car {
  // The constructor initializes the EVCar object with the given parameters
  // If any parameter is not provided, it will use the default value
  constructor(brand = '', motor = '', color = '', range = '') {
    // Call the constructor of the parent (Car) class with the provided parameters
    super(brand, motor, color);
    this._range = range;
  }

  // Define a static getter method for the Symbol.species property
  static get [Symbol.species]() {
    return Car;
  }
}

// Export the EVCar class as the default export
export default EVCar;
