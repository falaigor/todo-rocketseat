import logoUrl from "./images/Logo.svg";
import * as S from "./styles/App";

export default function App() {
  return (
    <>
      <S.Header>
        <img src={logoUrl} alt="logo" />
      </S.Header>
    </>
  );
}
