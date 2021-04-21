import styled from 'styled-components/native';

interface CheckboxProps {
  checked: boolean
}

export const CheckboxWrapper = styled.TouchableOpacity<CheckboxProps>`
  background-color: ${({ checked }) => (checked ? '#00a688' : '#e8e8e8')};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
