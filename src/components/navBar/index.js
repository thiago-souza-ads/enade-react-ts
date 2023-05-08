import React from "react";
import * as Styles from "./style";
import Logo from "../../assets/estacioBlackBg.png";

export default function NavBarHomeAluno() {
  return (
    <Styles.Main>
      <Styles.NavBarLeft>
        <i className="ph-light ph-list"></i>
      </Styles.NavBarLeft>
      <Styles.NavBarCenter>
        <i className="ph-fill ph-house"></i>
        <img src={Logo} alt="Logo" width="110px" height="30px" />
      </Styles.NavBarCenter>
    </Styles.Main>
  );
}
