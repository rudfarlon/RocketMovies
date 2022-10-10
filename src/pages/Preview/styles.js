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
    width: 1200px;
    margin: 0 auto;
    grid-area: content;
    overflow-y: auto;
    
    div.content {
      margin-top: 45px;

      > a {
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
      }

      > div.title {
        height: 50px;
        display: flex;
        align-items: center;
        white-space: nowrap;
        gap: 20px;
        margin-bottom: 24px;

        h2 {
          font-size: 36px;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.WHITE};
          
          display: flex;
          align-items: center;
        }

        svg {
          width: 20px;
          height: 20px;
          margin: 8px;
        }
      }

      > div.posted {
        width: 370px;
        height: 20px;
        display: flex;
        align-items: center;
        gap: 8px;

        img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        p {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }

        span.date {
          display: flex;
          align-items: center;
          gap: 8px;
          color: ${({ theme }) => theme.COLORS.WHITE};

          svg {
            width: 16px;
            height: 16px;
            margin: 0;

            color: ${({ theme }) => theme.COLORS.PINK};
          }
        }
      }

      > div.tags {
        margin-top: 40px;
        margin-bottom: 40px;
        display: flex;
        gap: 8px; 
      }
    }

    div.sinopse {
      font-size: 16px;
      font-weight: 400;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 40px;
    }
  }
`;
