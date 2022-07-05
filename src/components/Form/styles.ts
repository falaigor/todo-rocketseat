import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: -30px;
`;

export const Input = styled.input`
  width: 100%;
  color: var(--gray-100);
  padding: 16px;
  border-radius: 8px;
  border-color: var(--gray-700);
  background-color: var(--gray-500);

  :focus {
    color: var(--gray-100);
    outline-color: var(--purple-dark);
  }

  :placeholder {
    color: var(--gray-300);
  }
`;

export const Button = styled.button`
  padding: 16px;
  border: 0;
  outline: 1;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  color: var(--gray-100);
  outline-color: var(--blue);
  background-color: var(--blue-dark);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--blue);
  }
`;
