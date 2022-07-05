import * as S from "./styles";

import clipboardUrl from "../../images/clipboard.png";

export const NotTasks = () => {
  return (
    <S.NotTasks>
      <img src={clipboardUrl} alt="" />
      <p>
        <b>Você ainda não tem tarefas cadastradas</b>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </S.NotTasks>
  );
};
