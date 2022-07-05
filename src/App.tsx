import { PlusCircle, Trash } from "phosphor-react";
import logoUrl from "./images/Logo.svg";
import * as S from "./styles/App";

export default function App() {
  return (
    <>
      <S.Header>
        <img src={logoUrl} alt="logo" />
      </S.Header>
      <S.Container>
        <S.Form>
          <S.Input
            type="text"
            value=""
            placeholder="Adicione uma nova tarefa"
          />
          <S.Button type="button">
            Criar <PlusCircle weight="bold" style={{ marginLeft: "4px" }} />
          </S.Button>
        </S.Form>
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
          <S.TaskItem>
            <input type="checkbox" />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash />
            </button>
          </S.TaskItem>
        </S.TasksList>
      </S.Container>
    </>
  );
}
