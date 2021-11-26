export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    else if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
     }
   this._name = name;
   this._code = code;
 }
 
  set name(Newname)  {
    if (typeof Newname !== 'string')
    {
      throw new TypeError('Name must be a string');
    }
    this._name = Newname;
      }
  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

set code(Newcode)  {
    
      if (typeof Newcode !== 'string') {
        throw new TypeError('Code must be a string');
      }
        this._code = Newcode;
    }
 
 get name() {
   return this._name;
    }
  
  get code() {
        return this._code;
    }
}
