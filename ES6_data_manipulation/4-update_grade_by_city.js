export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  
  const sortFilter = students.filter((student) => student.location === city);

  const mapping = sortFilter.map((student) => {
      const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
      const grade = newGrade.length === 0 ? { grade: 'N/A' } : newGrade[0];
      return { ...student, ...grade };
    });

    return mapping;
}
