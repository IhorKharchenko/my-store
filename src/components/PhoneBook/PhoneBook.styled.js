import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  margin-right: 10px;
  padding: 5px;
`;
export const StyledButton = styled.button`
  padding: 5px;
  text-align: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
`;

export const StyledList = styled.ul`
  list-style: none;
`;
export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[4]}px;
`;
