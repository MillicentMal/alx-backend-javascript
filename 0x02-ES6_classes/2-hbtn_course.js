export default class HolbertonCourse {
  constructor(name, length, students) {
  Object.defineProperty(HolbertonCourse , "setName",  {
    set : function () {
      if (typeof name === 'string') {
        this._name = name;
      }
      else {
        TypeError("TypeError : Name must be a string")
      }
    }
  });
   Object.defineProperty(HolbertonCourse, "getName", {
   get : function () {
        return this._name;
    }
});
 Object.defineProperty(HolbertonCourse , "setLength",  {
    set : function () {
      if (typeof length === 'number') {
        this._length = length;
      }
      else {
       throw new TypeError("TypeError : Length must be a number");
      }
    }
  });
   Object.defineProperty(HolbertonCourse, "getLength", {
   get : function () {
        return this._length;
    }
});
     Object.defineProperty(HolbertonCourse , "setStudents",  {
    set : function () {
    if (Array.isArray(students) && student.every(isString)) {
      this._students = students
      }
      else {
        throw new TypeError("Students must be an array of strings")
      }
    }
  });
   Object.defineProperty(HolbertonCourse, "getStudents", {
   get : function () {
        return this._students;
    }
});
 }
}
