import { text_area_props } from "../../../../../context/blogsContext/typesBlog";
import s from "./textarea.module.css";

export default function Textarea(props: text_area_props) {
  return (
    <label className={s.inputName}>
      {props.name && props.name}
      <textarea
        className={props.className ? props.className : s.textArea}
        {...props}
        id=""
        cols={30}
        rows={10}
      />
    </label>
  );
}
