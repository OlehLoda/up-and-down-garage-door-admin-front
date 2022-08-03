import { ReactChild, ReactFragment, ReactPortal } from "react";
import s from "./youMayAlsoLike.module.css";
export default function YouMayAlso(props: {
  title?: string;
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <div className={s.youMayAlsoBlock}>
      <div className={s.coverTitle}>
        <h2>{props.title}</h2>
        <hr />
      </div>

      <div className={s.list}>{props.children}</div>
    </div>
  );
}
