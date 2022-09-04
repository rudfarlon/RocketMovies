import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 116px;

  > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  width: 100%;
  padding: 0 64px;
  
  input {
    width: 100%;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 8px;

    strong {
      font-size: 14px;
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  a {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;