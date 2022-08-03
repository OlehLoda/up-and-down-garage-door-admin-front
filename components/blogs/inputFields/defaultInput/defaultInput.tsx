import { ChangeEvent } from "react";
import { useBlogsContext } from "../../../../context/blogsContext/blogsContext";
import s from "./defaultInput.module.css";

interface Props {
  name?: string;
  type?: string;
  className?: string;
  required?: boolean;
  global_block_name?: string;
  name_object?: string;
  checked?: boolean;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultInput(props: Props) {
  return (
    <label className={s.inputName}>
      {props.name && props.name}
      <input
        placeholder={"Enter your text ..."}
        className={props.className ? props.className : s.defaultInput}
        {...props}
      />
    </label>
  );
}
