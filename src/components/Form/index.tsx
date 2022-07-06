import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import * as S from "./styles";

interface FormProps {
  handleAddItem: (title: string) => void;
}

export const Form = ({ handleAddItem }: FormProps) => {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue("");
    handleAddItem(value);
  }
  return (
    <S.Form>
      <S.Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <S.Button type="button" onClick={() => handleClick()}>
        Criar <PlusCircle weight="bold" style={{ marginLeft: "4px" }} />
      </S.Button>
    </S.Form>
  );
};
