import styled from "styled-components"

export const Main = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #575757;
  border-radius: 30px;
  position: fixed;
  right: 68px;
  top: 322px;
  width: 55px;
  text-align: center;
  gap: 20px;
  padding: 24px 0;
  background: #1f1f1f;
  z-index: 20;

  svg:hover {
    color: ${({ theme }) => theme.colors.primary.accentColor};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
`
