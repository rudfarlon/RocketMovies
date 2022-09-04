import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Form = styled.form`
  padding: 0 135px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};    
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 46px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > h1 {
    font-size: 24px;
    font-weight: 500;
    text-align: start;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 48px;
  }

  > button {
    margin-top: 16px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  > a {
    font-weight: 400;
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 42px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div {
    margin-bottom: 8px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;