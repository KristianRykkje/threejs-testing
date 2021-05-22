import styled from "@emotion/styled";

export const SideColumnContainerCSS = styled.div`
  position: sticky;
  top: 0;
  background-color: grey;
  height: 100vh;
  padding: 30px;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    visibility: hidden;
    display: none;
  }
`;
