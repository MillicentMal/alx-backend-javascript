export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
     }
     else if (!Array.isArray(students) && students.some(typeof student !== 'string')) {
       throw new TypeError('Students must be an array of strings')
      }
     
   this._name = name;
   this._length = length;
   this._students = students;
 }
 
  set name(Newname)  {
    if (typeof Newname !== 'string')
    {
      throw new TypeError('Name must be a string');
    }
    this._name = Newname;
      }




set length(Newlength)  {
    
      if (typeof Newlength !== 'number') {
        throw new TypeError('Length must be a number');
      }
        this._length = Newlength;
    }
 
  

set students(Newstudents) {
    
    if (!Array.isArray(Newstudents) && Newstudents.some(typeof student !== 'string' )) {
        throw new TypeError('Students must be an array of strings')
    }
      this._students = Newstudents;
    }
 
 get name() {
   return this._name;
    }
  
  get length() {
        return this._length;
    }
 get students() {
        return this._students;
    }
}
 
