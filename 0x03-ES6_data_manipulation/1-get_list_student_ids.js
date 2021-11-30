import getListStudents from "./0-get_list_students.js";
export default function getListStudentIds(list_of_students) {
  return list_of_students.map(student => student.id)
}
