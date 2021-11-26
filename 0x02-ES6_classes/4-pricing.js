import Currency from './3-currency.js';
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }
  
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    else if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
  
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }
 
 set amount(newCurrency) {
    if (!(newCurrency isinstanceof Currency)) {
      throw new TypeError('newCurrency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }
   
  
    
