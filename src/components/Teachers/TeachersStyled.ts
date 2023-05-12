import styled from "styled-components";

const TeachersStyled = styled.div.attrs({
  className: "teachers",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 5px auto;
  padding: 20px;
  border: ${({ theme }) => theme.colors.contrast} 5px solid;
`;
export default TeachersStyled;
