import styled, { css } from 'styled-components/native';
import { IStyledProps } from './interface';

export const Container = styled.View`
  height: 72px;
  padding: 14px;
  margin: 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['neutral-200']};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const fontVariant = css`
  font-family: ${({ theme }) => theme.fonts.label};
  font-size: 24px;
  color: ${({ theme }) => theme.colors['neutral-700']};
`;

export const Label = styled.Text`
  ${fontVariant};
`;

export const Status = styled.Text<IStyledProps>`
  ${fontVariant};
  font-weight: bold;
  color: ${({ color, theme }) => theme.colors[color]};
  ${({ strikeThrough, theme, color }) =>
    strikeThrough &&
    `text-decoration: line-through; text-decoration-color: ${theme.colors[color]} `};
`;
