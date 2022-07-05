import { PlusCircle } from "phosphor-react";
import * as S from "./styles";

export const Form = () => {
  return (
    <S.Form>
      <S.Input type="text" value="" placeholder="Adicione uma nova tarefa" />
      <S.Button type="button">
        Criar <PlusCircle weight="bold" style={{ marginLeft: "4px" }} />
      </S.Button>
    </S.Form>
  );
};
