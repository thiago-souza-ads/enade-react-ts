import { Container } from "components/containerFrame/index.js";
import * as Styles from "./style.js";
import NavBarHomeAluno from "components/navBar";
import ButtonUserInterface from "components/buttonUserInterface/index.js";
import { Box, Slider } from "@mui/material";
export default function Etapa5() {

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 7,
      label: '7',
    },
    {
      value: 8,
      label: '8',
    },
    {
      value: 9,
      label: '9',
    },
    {
      value: 10,
      label: '10',
    },
  ];
  return (
    <Styles.Container>
      <NavBarHomeAluno Stage="Etapa 5" />
      <Styles.Main>
        <Container
          width="800px"
          height="200px"
          title="Estação 2023"
          text="Sua opinião é muito importante para nós! Para continuarmos oferecendo uma experiência de aprendizado acolhedora e eficiente na nossa plataforma de preparo para o ENADE, gostariamos de saber sua opinião"
        />
        <Styles.Stage>
          <p> Etapa 5 - Avaliação plataforma</p>
        </Styles.Stage>
        <Styles.Assessment>
          <p>A avaliação será do tipo NPS(Net Promoter Score). <br /> Esse tipo de avaliação é utilizado para medir a satisfação e a fidelidade dos usuários em relação à nossa plataforma</p>
          <p>Ao responder a avaliação, você será solicitado a atribuir uma nota de 0 a 10 para nossa paltaforma, indicando o quanto você a recomendaria para um amigo ou colega. Com base nas notas atribuidas, poderemos identificar se estamos atingindo as expectativas dos nossos usuários e quais ações podemos tomar para melhorar</p>
        </Styles.Assessment>
        <Styles.Rating>
          <Box sx={{ width: 300 }}>
            <Slider
            sx={{color:"black"}}
              aria-label="Rate"
              defaultValue={10}
              valueLabelDisplay="auto"
              step={1}
              marks={marks}
              min={0}
              max={10}
            />
          </Box>
        </Styles.Rating>
        <ButtonUserInterface title="Responder" />
      </Styles.Main>
    </Styles.Container>
  );
}
