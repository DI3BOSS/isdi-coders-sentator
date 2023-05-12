import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: ${({ theme }) => theme.fontSize.titleFont};
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
export default ButtonStyled;
