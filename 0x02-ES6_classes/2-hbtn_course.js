export default class HolbertonCourse {
  constructor(name, length, students)
 {
   this._name = name;
   this._length = length;
   this._students = students;
 }
 
  set setName(name)  {
    if (typeof name !== 'string')
    {
      throw TypeError("Name must be a string");
    }
    this._name = name;
      }


get name() {
   return this._name;
    }

set setLength(length)  {
    
      if (typeof length === 'number') {
        this._length = length;
      }
      else {
       throw TypeError("TypeError : Length must be a number");
      }
    }
 
   get length() {
        return this._length;
    }

set setStudents(students) {
    
    if (Array.isArray(students) && student.every(isString)) {
      this._students = students
      }
      else {
        throw TypeError("Students must be an array of strings")
      }
    }
  
 get students() {
        return this._students;
    }
}
 
