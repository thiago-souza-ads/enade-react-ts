import { Container } from "components/containerFrame/index.js";
import * as Styles from "./style.js";
import NavBarHomeAluno from "components/navBar";
import ButtonUserInterface from "components/buttonUserInterface/index.js";
export default function Etapa3() {
  return (
    <Styles.Container>
      <NavBarHomeAluno Stage="Etapa 3" />
      <Styles.Main>
        <Container
          width="800px"
          height="200px"
          title="Estação 2023"
          text=" Etapa 3! Aqui você encontrará questões e simulados para se preparar para o (ENADE) de forma eficiente.
          Para avançar nessa etapa, basta responder às questões a seguir."
        />
        <Styles.Stage>
          <p>Etapa 3 - Questão 1 de 3</p>
        </Styles.Stage>
        <Styles.Questions>
          <div className="Question">
            <h4>
              1) As disciplinas cursadas contribuíram para sua formação
              integral, como cidadão e profissional?
            </h4>
          </div>
          <div className="Alternative">
            <p>
              A) Projeto Integrador. Agregou muito valor na carreira
              profissional e agregou valor nas competências e habilidades da
              área de TI.
            </p>

            <p>
              B) Projeto Integrador. Agregou muito valor na carreira
              profissional e agregou valor nas competências e habilidades da
              área de TI.
            </p>

            <p>
              C) Projeto Integrador. Agregou muito valor na carreira
              profissional e agregou valor nas competências e habilidades da
              área de TI.
            </p>

            <p>
              D) Projeto Integrador. Agregou muito valor na carreira
              profissional e agregou valor nas competências e habilidades da
              área de TI.
            </p>
          </div>
          <div className="Response">
            <p>Resposta Errada</p>
          </div>
        </Styles.Questions>

        <ButtonUserInterface title="Proxima etapa" />
      </Styles.Main>
    </Styles.Container>
  );
}
