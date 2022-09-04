import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  min-height: 225px;
  max-width: 1200px;
  padding: 32px;
  margin: 45px auto 35px;
  border-radius: 16px;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;

  background: ${({ theme }) => theme.COLORS.PINK_900};

  h2 {
    margin-bottom: 8px;

    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  svg {
    width: 12px;
    height: 12px;
    margin: 0 6px 0 0;
  }

  p {
    margin-top: 15px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-y: hidden;

    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  div.tags {
    width: 100%;
    margin-top: 20px;
    display: flex;
    gap: 8px;
  }
`;