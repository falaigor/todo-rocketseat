import { Form } from "./components/Form";
import { TaskItem } from "./components/TaskItem";
import * as S from "./styles/App";

import logoUrl from "./images/Logo.svg";
import { NotTasks } from "./components/NotTasks";

export default function App() {
  return (
    <>
      <S.Header>
        <img src={logoUrl} alt="logo" />
      </S.Header>
      <S.Container>
        <Form />
      </S.Container>

      <S.Container>
        <S.TasksInfo>
          <S.TasksInfoCreate>
            <h3>Tarefas criadas</h3>
            <span>0</span>
          </S.TasksInfoCreate>

          <S.TasksInfoComplete>
            <h3>Concluídas</h3>
            <span>0</span>
          </S.TasksInfoComplete>
        </S.TasksInfo>
      </S.Container>

      <S.Container>
        <S.TasksList>
          <NotTasks />
          <TaskItem />
        </S.TasksList>
      </S.Container>
    </>
  );
}
