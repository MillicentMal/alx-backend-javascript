export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

<<<<<<< HEAD
  cloneCar() {
    const carClone = this.constructor[Symbol.species] || this.constructor;
    const carObj = new carClone();
    return carObj;
  }
=======
   cloneCar() {
     const Carclone = this.constructor[Symbol.species] || this.constructor;
    const carObj = new Carclone();
     return carObj;
   }
>>>>>>> a66e9d1b5dcd87faf1c3405deeb57200f2ee75f9
}
