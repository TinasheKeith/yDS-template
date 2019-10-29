import styled from 'styled-components';
import { getColor } from './utils';

export const Display = styled.h1`
  font-weight: lighter;
  font-size: 2.2rem;
  color: ${ props => getColor(props, '#000')};
`;

export const Header = styled.h3`
  text-justify: ${({ center }) => (center ? 'center' : null)};
  font-weight: bold;
  font-size: 2rem;
  color: ${ props => getColor(props, '#000')};
`;

export const Title = styled.h3`
  font-size: 1.7em;
  color: ${ props => getColor(props, '#000')};
`;

export const Headline = styled.p`
  font-size: 1.5rem;
  color: ${ props => getColor(props, '#000')};
`;

export const Body = styled.p`
  font-size: 1.249rem;
  color: ${ props => getColor(props, '#000')};
`;

export const Caption = styled.p`
  color: ${ props => getColor(props, '#000')};
  font-size: 1rem;
  color: grey;
`;
