import Car from "./10-car.js";
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
   
    this._range = range;
  }

  cloneCar() {
    const carClone = new (this.constructor[Symbol.species] || this.constructor)();
    return carClone;
  }
}
