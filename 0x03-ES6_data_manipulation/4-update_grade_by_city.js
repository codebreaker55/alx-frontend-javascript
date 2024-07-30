export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  // using filter to get students in the specified city
  const studentCity = studentsList.filter((student) => student.location === city);

  const updateStudents = studentCity.map((student) => {
    // find the student grade for the student in newGrades array
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

    // if the grade is found, update else set N/A
    const gradeUpdate = studentGrade ? studentGrade.grade : 'N/A';

    // return a new obj with the grade updated
    return {
      ...student,
      grade: gradeUpdate,
    };
  });
  return updateStudents;
}
