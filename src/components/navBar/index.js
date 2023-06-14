/* eslint-disable react/prop-types */
import React from "react";
import * as Styles from "./style";
import Logo from "../../assets/estacioBlackBg.png";
import DrawerSlider from "./Drawer";

export default function NavBarHomeAluno(props) {
  return (
    <Styles.Main>
      <Styles.NavBarLeft>
        <DrawerSlider />
      </Styles.NavBarLeft>
      <Styles.NavBarCenter>
        <div className="Stage">
          <i className="ph-fill ph-house"></i>
          <i className="ph ph-arrow-right"></i>
          <p>{props.Stage}</p>
        </div>
        <img src={Logo} alt="Logo" width="110px" height="30px" />
      </Styles.NavBarCenter>
    </Styles.Main>
  );
}
