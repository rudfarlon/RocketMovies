import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    padding-left: 144px;
    
    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.PINK_900};

    a {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -100px auto;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 5px;
    right: 5px;

    cursor: pointer;

    input { 
      display: none;
    }

    svg {
      width: 25px;
      height: 25px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 160px auto 0;

  > div:nth-child(even) {
    margin: 8px 0 24px;
  }

  button {
    font-size: 16px;
    font-weight: 500;
    background: ${({ theme }) => theme.COLORS.PINK};
  }
`;