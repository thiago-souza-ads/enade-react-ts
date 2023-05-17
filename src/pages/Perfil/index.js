import Input from "../../components/input/index.tsx";
import * as Styles from "./style.js";
import { useState } from "react";
import Avatar from "../../assets/avatar.svg";
import ButtonUserInterface from "components/buttonUserInterface/index.js";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const [name, setName] = useState("");
  const [curso, setCurso] = useState("");

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const savePerfil = () => {};

  return (
    <Styles.Container>
      <Styles.Main>
        <Styles.Title>Editar dados de Perfil</Styles.Title>
        <Styles.Inputs>
          <Input
            placeholder="Nome"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            placeholder="Curso"
            onChange={(event) => setCurso(event.target.value)}
          />
        </Styles.Inputs>
        <Styles.Avatar>
          <div className="Title">
            <p>Avatar</p>
          </div>
          <div className="IconPerson">
            <img src={Avatar} alt="Avatar" />
            <p onClick={() => navigate("/editar-avatar")}>Gerar novo avatar</p>
          </div>
        </Styles.Avatar>
        <ButtonUserInterface title="Salvar" onClick={savePerfil} />
      </Styles.Main>
    </Styles.Container>
  );
}
