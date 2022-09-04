import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  > input {
    width: 100%;
    height: 56px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;