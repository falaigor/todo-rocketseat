import { Trash } from "phosphor-react";
import * as S from "./styles";

export const TaskItem = () => {
  return (
    <S.TaskItem>
      <input type="checkbox" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash />
      </button>
    </S.TaskItem>
  );
};
