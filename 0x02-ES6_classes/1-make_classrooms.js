import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  let classes = [];
  let x = new ClassRoom(19);
 classes.push(x);
 let y = new Classroom(20);
 classes.push(y);
  let z = new Classroom(34);
 classes.push(z);

  return classes;
}
  
