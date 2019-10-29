import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  max-width: 550px;
  border: 1px solid #f3f1f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 1em;
  margin: 1em;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
