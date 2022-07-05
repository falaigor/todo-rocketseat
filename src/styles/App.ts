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
