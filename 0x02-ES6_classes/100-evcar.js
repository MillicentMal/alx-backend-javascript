import Car from "./10-car.js";
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
   
    this._range = range;
  }

  cloneCar() {
    const carClone = (this.constructor[Symbol.species] || this.constructor);
    const = carObj = new carClone();
    return carObj;
  }
}
