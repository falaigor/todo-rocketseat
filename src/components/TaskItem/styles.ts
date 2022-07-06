import styled from "styled-components";

interface CompleteProps {
  active: boolean;
}

export const TaskItem = styled.div<CompleteProps>`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  background-color: var(--gray-500);
  border-radius: 8px;
  margin: 10px 0;

  p {
    flex: 2;
    padding: 0 12px;
    color: ${({ active }) => (active ? "var(--gray-300)" : "var(--white)")};
    font-style: ${({ active }) => (active ? "oblique" : "normal")};
    text-decoration: ${({ active }) => (active ? "line-through" : "none")};
  }
`;

export const Trash = styled.button`
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
`;

export const Complete = styled.button<CompleteProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 25px;
  width: 25px;
  border: 2px solid var(--blue);
  border-color: ${({ active }) => (active ? "var(--purple)" : "var(--blue)")};
  border-radius: 50%;
  padding: 5px;
  color: ${({ active }) => (active ? "var(--white)" : "var(--gray-300)")};
  transition: all 0.2s ease-out;
  background-color: ${({ active }) =>
    active ? "var(--purple)" : "var(--gray-400)"};

  :hover {
    background-color: ${({ active }) =>
      active ? "var(--purple-dark)" : "var(--blue-dark)"};
  }
`;
