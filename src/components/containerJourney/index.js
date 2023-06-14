/* eslint-disable react/prop-types */
import * as Style from "./style";
import HomeIcon from "../../assets/HomeJourney.svg";
import UserAvatar from "components/userAvatar";
import Number1 from "../../assets/number1.svg";
import Number2 from "../../assets/number2.svg";
import Number3 from "../../assets/number3.svg";
import Number4 from "../../assets/number4.svg";
import Number5 from "../../assets/number5.svg";

export const ContainerJouney = () => {
  return (
    <Style.Main>
      <Style.Title>
        <strong>Etapas</strong>
      </Style.Title>
      <Style.GridMain>
        <Style.GridSquare background="#BBF192">
          <div className="beginJourney">
            <UserAvatar  style={{width: '85px'}} className="avatar"/>
            <img src={HomeIcon} alt="HomeIcon" />
          </div>
        </Style.GridSquare>
        <Style.GridSquare>
          <img src={Number1} alt="Number" />
        </Style.GridSquare>

        <Style.GridSquare>
        <img src={Number2} alt="Number" />
        </Style.GridSquare>

        <Style.GridSquare>
        <img src={Number3} alt="Number" />
        </Style.GridSquare>

        <Style.GridSquare>
        <img src={Number4} alt="Number" />
        </Style.GridSquare>

        <Style.GridSquare>
        <img src={Number5} alt="Number" />
        </Style.GridSquare>
      </Style.GridMain>
    </Style.Main>
  );
};
