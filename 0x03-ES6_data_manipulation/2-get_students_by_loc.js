export default function getStudentsByLocation(array, city) {
  return array.filter((student) => student.city === city);
}
