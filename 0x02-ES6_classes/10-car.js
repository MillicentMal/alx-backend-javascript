export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

cloneCar() {
  const carClone = this.constructor[Symbol.species];
  return newObject = carClone();
}

}
