import styled from "styled-components";

const StudentStyled = styled.div.attrs({ className: "student" })`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  width: 90px;
  height: 90px;
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.colors.black};

  &-image {
    height: 90px;
    width: auto;
    cursor: pointer;
  }

  .too-large-to-fit {
    width: 90px;
    height: auto;
  }
`;

export default StudentStyled;
