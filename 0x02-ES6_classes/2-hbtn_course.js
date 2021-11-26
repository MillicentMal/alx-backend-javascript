export default class HolbertonCourse {
  constructor(name, length, students)
 {
   if (typeof Newname !== 'string')
    {
      throw TypeError("Name must be a string");
    }
   else if (typeof Newlength !== 'number') {
    throw TypeError("Length must be a number");
      }
     else if (!Array.isArray(NewStudents) && student.every(!isString)) {
        throw TypeError("Students must be an array of strings")
      }
     
   this._name = name;
   this._length = length;
   this._students = students;
 }
 
  set name(Newname)  {
    if (typeof Newname !== 'string')
    {
      throw TypeError("Name must be a string");
    }
    this._name = Newname;
      }


get name() {
   return this._name;
    }

set length(Newlength)  {
    
      if (typeof Newlength === 'number') {
        this._length = Newlength;
      }
      else {
       throw TypeError("TypeError : Length must be a number");
      }
    }
 
   get length() {
        return this._length;
    }

set students(NewStudents) {
    
    if (Array.isArray(NewStudents) && student.every(isString)) {
      this._students = Newstudents;
      }
      else {
        throw TypeError("Students must be an array of strings")
      }
    }
  
 get students() {
        return this._students;
    }
}
 
