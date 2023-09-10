import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: 16px;
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  opacity: 0.6;
  transition: opacity color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  font-size: 20px;
  background-color: #f4f4fd;
  color: black;
  border-color: #4d5ae5;

  &:hover,
  &:focus {
    opacity: 1;
    color: white;
    background-color: #4d5ae5;
  }
`;

export const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  border: none;
  background-color: #f4f4fd;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
