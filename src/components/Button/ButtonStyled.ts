import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: ${(props) => props.theme.fontSize.titleFont};
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
`;
export default ButtonStyled;
