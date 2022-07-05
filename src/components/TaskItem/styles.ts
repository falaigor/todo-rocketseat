import styled from "styled-components";

export const TaskItem = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  background-color: var(--gray-500);
  border-radius: 8px;
  margin: 10px 0;

  input[type="checkbox"] {
    height: 15px;
    width: 15px;
    background-color: var(--gray-500);
  }

  p {
    flex: 2;
    padding: 0 12px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 25px;
    width: 25px;
    border: 0;
    padding: 5px;
    color: var(--gray-300);
    background-color: var(--gray-500);
    transition: all 0.2s ease-out;

    :hover {
      color: var(--danger);
      background-color: var(--gray-400);
    }
  }
`;
