import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const array1 = [19, 20, 34];
  const classes = [];
  for (const element of array1) {
      classes.push(new ClassRoom(element));
  }
  return classes;
}
