import getListStudents from "./0-get_list_students.js";
export default function getListStudentIds(list_of_students) {
 const ids_list = list_of_students.map(student => student.id);
  return ids_list;
}
