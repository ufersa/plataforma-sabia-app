import styled from 'styled-components/native';

interface PlaceholderProps {
  style?: object
  light?: boolean
}

const Placeholder = styled.View<PlaceholderProps>`
  background-color: ${({ light }) => (light ? '#F5F5F5' : '#E8E8E8')};
  width: 100%;
  height: 27px;
  border-radius: 4px;
  margin-top: 16px;
`;

export default Placeholder;
