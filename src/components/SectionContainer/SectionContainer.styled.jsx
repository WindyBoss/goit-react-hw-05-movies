import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 10px;
  border: ${props => (props.isEmpty ? 'none' : '1px solid black')};
  border-radius: 3px;
  min-height: ${props => (props.isEmpty ? '500px' : 'auto')};
`;
