import Image from "../Image/Image";
import TeachersStyled from "./TeachersStyled";

interface TeachersProps {
  teachers: string[];
}
const Teachers = ({ teachers }: TeachersProps): JSX.Element => {
  return (
    <TeachersStyled>
      {teachers.map((teacher) => {
        const teacherName = teacher.replace(/-/g, " ");
        return (
          <Image
            className="teacher-image"
            src={`assets/images/teachers_photos/${teacher}.png`}
            alt={`teacher ${teacherName}`}
            key={teacher}
          />
        );
      })}
    </TeachersStyled>
  );
};

export default Teachers;
