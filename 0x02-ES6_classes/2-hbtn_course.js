export default class HolbertonCourse {
  constructor(name, length, students)
 {
  set setName(name)  {
    
      if (typeof name === 'string') {
        this._name = name;
      }
      else {
        TypeError("TypeError : Name must be a string")
      }
    }
  });
get getName {
   return this._name;
    }
});
 set setLength  {
    
      if (typeof length === 'number') {
        this._length = length;
      }
      else {
       throw new TypeError("TypeError : Length must be a number");
      }
    }
  });
 
   get getLength {
        return this._length;
    }
});
set setStudents {
    
    if (Array.isArray(students) && student.every(isString)) {
      this._students = students
      }
      else {
        throw new TypeError("Students must be an array of strings")
      }
    }
  });
   get getStudents {
        return this._students;
    }
});
 }
}
