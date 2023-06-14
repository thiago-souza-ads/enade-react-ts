import { Container } from "components/containerFrame/index.js";
import * as Styles from "./style.js";
import NavBarHomeAluno from "components/navBar";
import ButtonUserInterface from "components/buttonUserInterface/index.js";
export default function Etapa2() {
  return (
    <Styles.Container>
      <NavBarHomeAluno Stage="Etapa 2" />
      <Styles.Main>
        <Container
          width="800px"
          height="180px"
          title="Estação 2023"
          text="Etapa 2! Aqui você encontrará questões e simulados para se preparar para o (ENADE) de forma eficiente. Para Avançar nessa etapa, basta responder às questões a seguir."
        />
        <Styles.Stage>
          <p>Etapa 2 - Questão 1 de 9</p>
        </Styles.Stage>
        <Styles.Questions>
          <div className="Question">
            <h4>
              1) As disciplinas cursadas contribuíram para sua formação
              integral, como cidadão e profissional?
            </h4>
          </div>
          <div className="answer">
            <p>
              R: Projeto Integrador. Agregou muito valor na carreira
              profissional e agregou valor nas competências e habilidades da
              área de TI.
            </p>
          </div>
        </Styles.Questions>
        <Styles.SelectContainer>
          <div>
            <input type="radio" id="1" name="select" value="1"/>
            <label htmlFor="1">1 Discordo Totalmente</label>
          </div>
          <div>
            <input type="radio" id="2" name="select" value="2"/>
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input type="radio" id="3" name="select" value="3"/>
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input type="radio" id="4" name="select" value="4"/>
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input type="radio" id="5" name="select" value="5"/>
            <label htmlFor="5">5</label>
          </div>
          <div>
            <input type="radio" id="6" name="select" value="6"/>
            <label htmlFor="6">6 Concordo Totalmente</label>
          </div>
        </Styles.SelectContainer>
        <Styles.SelectContainer2>
        <div>
            <input type="radio" id="Não sei responder" name="select" value="7"/>
            <label htmlFor="Não sei responder">Não sei responder</label>
          </div>
          <div>
            <input type="radio" id="Não se aplica" name="select" value="8"/>
            <label htmlFor="Não se aplica">Não se aplica</label>
          </div>
        </Styles.SelectContainer2>
     
        <ButtonUserInterface title="Proxima etapa" />
      </Styles.Main>
    </Styles.Container>
  );
}
