export default class HolbertonCourse {
  constructor(name, length, students)
 {
   if (typeof name !== 'string')
    {
   throw TypeError("Name must be a string");
    }
   else if (typeof length !== 'number') {
    throw TypeError("Length must be a number");
      }
     else if (!Array.isArray(students) && student.every(!isString)) {
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




set length(Newlength)  {
    
      if (typeof Newlength !== 'number') {
        throw TypeError("TypeError : Length must be a number");
      }
        this._length = Newlength;
    }
 
  

set students(NewStudents) {
    
    if (!Array.isArray(NewStudents) && student.every(!isString)) {
        throw TypeError("Students must be an array of strings")
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
 
