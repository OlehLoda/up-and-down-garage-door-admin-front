import { ReactElement } from "react";
import s from "./textBlockWithMap.module.css";
interface Props {
  text: string | undefined;
  className?: string;
}
export default function TextBlockWithMap({
  text,
  className,
}: Props): ReactElement {
  if (text && text.length > 0) {
    return (
      <div className={className}>
        {text.trim().split("\n").map((cat_text) => {
          return (
            <p
              key={Math.random()}
              className={s.textBlockOther}
              dangerouslySetInnerHTML={{ __html: cat_text }}
            />
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
}
