import { Check, Trash } from "phosphor-react";
import * as S from "./styles";
import { TaskProps } from "../../App";

interface TaskItemProps {
  task: TaskProps;
  removeTask: () => void;
  completeTask: () => void;
}

export const TaskItem = ({ task, removeTask, completeTask }: TaskItemProps) => {
  return (
    <S.TaskItem active={task.isComplete}>
      <S.Complete active={task.isComplete} onClick={() => completeTask()}>
        {task.isComplete && <Check weight="bold" />}
      </S.Complete>

      <p>{task.title}</p>

      <S.Trash onClick={() => removeTask()}>
        <Trash />
      </S.Trash>
    </S.TaskItem>
  );
};
