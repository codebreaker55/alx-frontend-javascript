export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((sum, curr) => sum + curr.id, 0);
}
