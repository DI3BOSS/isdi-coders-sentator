import styled from "styled-components";

const HeaderStyled = styled.header.attrs({ className: "header" })`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default HeaderStyled;
