import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from './utils';

export const Toolbar = styled.div`
  display: flex;
  height: 4em;
  color: white;
  width: 100%;
  padding: 8px 24px;
  justify-content: space-between;
  background-color: ${(props) => getColor(props)};
`;

export const ToolbarTitle = styled.h3`
  color: white;
  text-align: center;
`;

export const ToolbarActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  color: white;
  font-size: 0.8em;
`;

export const ToolbarAction = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  margin-right: 10px;

  &:hover {
    color: ${({ theme }) => (theme.accentColor)};
  }
`;
