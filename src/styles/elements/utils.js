import styled, { css } from 'styled-components';

export const getColor = (props, defaultColor) => {
  if (props.color) {
    return props.color;
  }

  if (props.primary) {
    return props.theme.primaryColor;
  }

  if (props.secondary) {
    return props.theme.secondaryColor;
  }

  return defaultColor ? defaultColor : props.theme.primaryColor;
};

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  max-width: 1010px;
  width: ${(props) => (props.fillWidth ? '100%' : null)};
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  height: ${({ fill }) => (fill ? '100vh' : null)};
`;

const sizes = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904,
};

export const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
