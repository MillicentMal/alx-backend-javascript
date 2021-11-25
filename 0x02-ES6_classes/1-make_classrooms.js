import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  classes = [];
  x = new ClassRoom(19);
 classes.push(x);
 y = new Classroom(20);
 classes.push(y);
  z = new Classroom(34);
 classes.push(z);

  return classes;
}
  
