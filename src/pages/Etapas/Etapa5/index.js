import { Container } from "components/containerFrame/index.js";
import * as Styles from "./style.js";
import NavBarHomeAluno from "components/navBar";
import ButtonUserInterface from "components/buttonUserInterface/index.js";
export default function Etapa5() {
  return (
    <Styles.Container>
      <NavBarHomeAluno Stage="Etapa 5" />
      <Styles.Main>
        <Container
          width="800px"
          height="200px"
          title="Estação 2023"
          text="Seja bem vindo {aluno}, parabéns por iniciar Estação ENADE 2023. Essa é a primeira
          etapa que vamos iniciar durante a experiência incrível que vamos trilhar juntos.
         Assista ao vídeo e avance as etapas."
        />
        <Styles.Video />
        <ButtonUserInterface title="Proxima etapa" />
      </Styles.Main>
    </Styles.Container>
  );
}
