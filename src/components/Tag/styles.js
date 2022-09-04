import styled from "styled-components";

export const Container = styled.span`
  width: fit-content;
  padding: 5px 16px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_TAGS};
`;