import { CSSProperties, ReactNode, useState } from "react";
import arrow from "../../../../public/image/arrowIcon.svg";
import s from "./wrapInputsIntoOneSection.module.css";
interface Props {
  children: ReactNode;
  name: string;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  id: string;
}
export default function WrapInputsIntoOneSection({
  children,
  name,
  // onSubmit,
  id,
}: Props) {
  const [openHead, setOpenHead] = useState("");

  function handleOpenHead() {
    if (openHead === id) setOpenHead("");
    else setOpenHead(id);
  }

  const stylesForOpenedHead: CSSProperties = {
    height: "302px",
    marginTop: "10px",
    overflowY: "scroll",
    padding: "0 7px 5px 3px",
    alignContent: "flex-start",
  };

  return (
    <div className={s.wrapInputsIntoOneSection}>
      <p className={s.inputsHead} onClick={handleOpenHead}>
        {name}
        <img
          src={arrow}
          className={s.arrowForInputsHead}
          alt="arrow icon"
          style={openHead === id ? { transform: "scaleY(-1)" } : {}}
        />
      </p>
      <form
        className={s.inputsBody}
        style={openHead === id ? stylesForOpenedHead : {}}
        // onSubmit={onSubmit}
      >
        {children}
        <button style={{ display: "none" }} />
      </form>
    </div>
  );
}
