import styled from 'styled-components';
import { getColor, above } from './utils';

// eslint-disable-next-line import/prefer-default-export
export const InputField = styled.input`
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-radius: ${({ round }) => ( round ? '30px' : '5px')};
  max-width: 500px;
  min-width: 320px;
  ${
  above.md`
      min-width: 420px;
    `
};
  padding: 16px;
  font-size: 1em;
  color: ${(props) => getColor(props)};
  outline: none;
  margin: 0.8em;
`;

export const Label = styled.label`
  font-size: 1em;
  color: ${(props) => getColor(props)};
  margin: 0 1em;
`;
