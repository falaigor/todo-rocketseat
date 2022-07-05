import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import * as S from "./styles";

export const Form = () => {
  const [value, setValue] = useState("");

  return (
    <S.Form>
      <S.Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <S.Button type="button">
        Criar <PlusCircle weight="bold" style={{ marginLeft: "4px" }} />
      </S.Button>
    </S.Form>
  );
};
