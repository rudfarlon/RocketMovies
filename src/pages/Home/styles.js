import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  main {
    width: 100%;
    
    > div {
      width: 1200px;
      height: 750px;
      padding-right: 8px;
      margin: 0 auto;
      grid-area: content;
      overflow-y: auto;

      > div.title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 45px auto 35px;

        h2 {
          font-size: 32px;
          font-weight: 400;
          color: ${({ theme }) => theme.COLORS.WHITE};
        }

        button {
          width: 210px;

          display: flex;
          gap: 8px;

          background: ${({ theme }) => theme.COLORS.PINK};
          color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
      }

      > div.cards {
        width: 100%;
      
      }
    }
  }
`;

