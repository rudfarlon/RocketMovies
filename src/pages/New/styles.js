import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  div.header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      height: 56px;
    }
  }

  main {
    grid-area: content;
    max-width: 100%;
    
    > div {
      width: 1200px;
      height: 600px;
      padding: 8px;
      margin: 0 auto;
      overflow-y: auto;

      > .wrapper {
          a {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.PINK};
    
            display: flex;
            align-items: center;
            gap: 8px;
    
            margin: 40px auto 24px;
          }
    
          h2 {
            font-size: 36px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            margin-bottom: 40px;
          }
        }
  
      > .col2 {
        width: 100%;
        margin-bottom: 40px;
    
        display: flex;
        align-items: center;
        gap: 40px;
        
        input {
          width: 100%;
          height: 56px;
          border-radius: 10px;
    
          display: flex;
      
          background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
        }
      }
        
      textarea {
        width: 100%;
      }
  
      > h3 {
        margin: 40px 0 24px;
        
        font-size: 20px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
      
      .tags { 
        display: flex;
        align-items: center;
        gap: 16px;

        padding: 16px;
        border-radius: 10px;
        margin-bottom: 40px;
  
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
        > div {
          height: 56px;
        }
      }

      > div.button-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 50px;

        .button-black {
          background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
          color: ${({ theme }) => theme.COLORS.PINK};
        }

        .button-save {
          background: ${({ theme }) => theme.COLORS.PINK};
          color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
      }
    }

  }

`;

