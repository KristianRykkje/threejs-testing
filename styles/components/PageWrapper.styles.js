import styled from "@emotion/styled";

export const PageWrapperCSS = styled.main`
  margin: 20px;
`;

export const IndexPageWrapperCSS = styled.main`
  display: grid;
  grid-template-columns: 1fr 65ch 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export const MainContainerCSS = styled.div`
  padding: 10px;
  background-color: whitesmoke;
`;
