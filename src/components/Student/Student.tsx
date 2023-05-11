interface StudentProps {
  student: string;
  studentsWithLargerImage: string;
}

const Student = ({
  student,
  studentsWithLargerImage,
}: StudentProps): JSX.Element => {
  const studentName = student.replace(/-/g, " ");

  return (
    <div key={student} className="student">
      <img
        className={`student-images${
          studentsWithLargerImage.includes(student) && " too-large-to-fit"
        }`}
        src={`assets/images/students-photos/${student}.png`}
        alt={`student ${studentName}`}
      />
    </div>
  );
};
export default Student;
