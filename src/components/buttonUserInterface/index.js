/* eslint-disable react/prop-types */
import * as Styles from "./style";

export default function ButtonUserInterface(props) {
  return <Styles.Button onClick={props.onClick}>{props.title}</Styles.Button>;
}
