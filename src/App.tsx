import { Form } from "./components/Form";
import { TaskItem } from "./components/TaskItem";
import * as S from "./styles/App";

import logoUrl from "./images/Logo.svg";
import { NotTasks } from "./components/NotTasks";
import { useEffect, useState } from "react";

export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: "1",
      title: "Terminar desafio",
      isComplete: false,
    },
    {
      id: self.crypto.randomUUID(),
      title: "Estudar Vite",
      isComplete: true,
    },
  ]);

  function addTask(title: string) {
    const newItem = {
      id: self.crypto.randomUUID(),
      title,
      isComplete: false,
    };

    setTasks([...tasks, newItem]);
  }

  function completeTask(id: string) {
    const exists = !!tasks.find((task) => task.id === id);

    if (exists) {
      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, isComplete: !task.isComplete };
          }
          return task;
        });
      });
    }
  }

  function removeTask(id: string) {
    const exists = !!tasks.find((task) => task.id === id);

    if (exists) {
      const newTask = tasks.filter((task) => {
        return task.id !== id;
      });

      setTasks(newTask);
    }
  }

  const isTaskListEmpty = tasks.length === 0;

  const doneTasksCount = tasks.reduce(
    (acc, { isComplete }) => (isComplete ? acc + 1 : acc),
    0
  );

  return (
    <>
      <S.Header>
        <img src={logoUrl} alt="logo" />
      </S.Header>
      <S.Container>
        <Form handleAddItem={addTask} />
      </S.Container>

      <S.Container>
        <S.TasksInfo>
          <S.TasksInfoCreate>
            <h3>Tarefas criadas</h3>
            <span>{tasks.length}</span>
          </S.TasksInfoCreate>

          <S.TasksInfoComplete>
            <h3>Concluídas</h3>
            <span>
              {isTaskListEmpty
                ? doneTasksCount
                : doneTasksCount + " de " + tasks.length}
            </span>
          </S.TasksInfoComplete>
        </S.TasksInfo>
      </S.Container>

      <S.Container>
        <S.TasksList>
          {tasks.length === 0 && <NotTasks />}

          {tasks.map((task: TaskProps) => (
            <TaskItem
              key={task.id}
              task={task}
              completeTask={() => completeTask(task.id)}
              removeTask={() => removeTask(task.id)}
            />
          ))}
        </S.TasksList>
      </S.Container>
    </>
  );
}
