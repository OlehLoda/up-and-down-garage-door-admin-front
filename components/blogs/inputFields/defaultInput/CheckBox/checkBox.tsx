import { checkbox_props } from "../../../../../context/blogsContext/typesBlog";
import s from "./checkBox.module.css";

export default function CheckBox(props: checkbox_props) {
  return (
    <label className={s.inputName}>
      {props.name && props.name}
      <input
        type={"checkbox"}
        placeholder={"Enter your text ..."}
        className={props.className ? props.className : s.defaultCheckBoxInput}
        {...props}
      />
    </label>
  );
}
