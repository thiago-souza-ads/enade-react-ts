/* eslint-disable react/prop-types */
import * as Style from "./style";


export const Container = (props) =>{
  return(
    <Style.Main width={props.width} height={props.height}> 
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
      <p>{props.final}</p>
    </Style.Main>
  );
};
