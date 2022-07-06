import { useState } from "react";
import { Check, Trash } from "phosphor-react";
import * as S from "./styles";

export const TaskItem = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <S.TaskItem active={isComplete}>
      <S.Complete
        active={isComplete}
        onClick={() => setIsComplete(!isComplete)}
      >
        {isComplete && <Check weight="bold" />}
      </S.Complete>

      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <S.Trash>
        <Trash />
      </S.Trash>
    </S.TaskItem>
  );
};
