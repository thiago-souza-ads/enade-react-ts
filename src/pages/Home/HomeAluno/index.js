import * as Styles from "./style";
import NavBarHomeAluno from "../../../components/navBar";
import ButtonUserInterface from "components/buttonUserInterface";
import { Container } from "components/containerFrame";
import { ContainerJouney } from "components/containerJourney";

export default function HomeAluno() {
  return (
    <Styles.Main>
      <NavBarHomeAluno />
      <Styles.MainUserInterface>
        <Styles.MainUserInterfaceTitle>
          <Styles.Text fontSize="20px">Bem-Vindo!</Styles.Text>
          <ButtonUserInterface title="Iniciar jornada" />
        </Styles.MainUserInterfaceTitle>
        <Styles.MainUserInterfaceFrames>
          <Container
            width="500px"
            height="auto"
            title="Estação ENADE 2023!"
            text="É com grande satisfação que recebemos você aqui, em nossa plataforma de preparação para a prova do Exame Nacional de Desempenho de Estudantes (ENADE). Sabemos que esse é um momento importante para você e para a faculdade, por isso, estamos aqui para auxiliá-lo nessa jornada."
            text2="O ENADE é uma avaliação fundamental para a melhoria da qualidade do ensino superior no país. Através dele, é possível avaliar o desempenho dos estudantes e das instituições, de modo a garantir a excelência do ensino e a formação de profissionais cada vez mais capacitados e preparados para enfrentar os desafios do mercado de trabalho."
            text3="Aqui na Estação ENADE 2023, você terá acesso a um conjunto de questões e simulados que irão ajudá-lo a se preparar para a prova de forma eficiente e consistente. Além disso, nossa plataforma foi desenvolvida com muito cuidado e carinho, para proporcionar a você uma experiência acolhedora e confortável durante todo o processo de preparação."
            final="Bons estudos!"
          />
          <ContainerJouney />
        </Styles.MainUserInterfaceFrames>
      </Styles.MainUserInterface>
    </Styles.Main>
  );
}
