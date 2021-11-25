import ClassRoom from "./0-classroom.js";

ClassRoom.prototype.initializeRooms =  function() {
  let classes = [];
  let x = new ClassRoom(19);
 classes.push(x);
 let y = new ClassRoom(20);
 classes.push(y);
  let z = new ClassRoom(34);
 classes.push(z);

  return classes;
}
  
