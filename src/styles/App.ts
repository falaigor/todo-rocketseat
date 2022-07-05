import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--gray-700);
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  max-width: 768px;
  margin: 0 auto;
`;

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

export const TasksInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;

  span {
    font-size: 1rem;
    padding: 2px 8px;
    font-weight: bold;
    border-radius: 99px;
    background-color: var(--gray-400);
    color: var(--gray-100);
  }
`;

export const TasksInfoCreate = styled.div`
  display: flex;
  color: var(--blue);
  gap: 8px;
`;

export const TasksInfoComplete = styled(TasksInfoCreate)`
  color: var(--purple);
`;

export const TasksList = styled.div`
  margin-top: 24px;
  width: 100%;
`;
