import styled from 'styled-components';
import { getColor, below } from './utils';

export const Button = styled.button`
  /* padding: 18px 32px; */
  padding: ${({ small }) => (small ? '9px 16px' : '18px 32px')};
  border-radius: ${({ round }) => ( round ? '30px' : '5px')};
  border: none;
  outline: none;
  color: white;
  margin: 1em;
  max-width: 164px;
  ${below.xs`
    width: 100%;
  `};
  font-weight: bold;
  background: ${(props) => getColor(props)};
  font-weight: 1.4em;

  &:hover {
    transition: 0.2s ease-in;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);    
  }
`;

export const FloatingActionButton = styled(Button)`
  width:60px;
  height:60px;
  border-radius:100%;
  border:none;
  outline:none;
  color:#FFF;
  font-size:36px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const LabelButton = styled(Button)`
  color: ${(props) => getColor(props)};
  background: transparent;
  border-radius: 0px;

  &:hover {
    box-shadow: none;
    border-bottom: 3px solid ${(props) => getColor(props)};
    transition: none;
  }
`;
