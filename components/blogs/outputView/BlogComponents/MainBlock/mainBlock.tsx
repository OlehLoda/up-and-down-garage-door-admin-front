import React, { CSSProperties } from "react";

import s from "./mainBlock.module.css";
import { blocks_type } from "../../../../../context/blogsContext/typesBlog";

// interface dataFromFirstBlogComponentInterface {
//   title: string;
//   text: string[];
// }

// interface Props {
//   data: dataFromFirstBlogComponentInterface;
//   img: any;
// }

export default function MainBlock({
  data,
  id,
}: {
  data: blocks_type;
  id: string;
}) {
  const { description, headline, image } = data;
  const onePar =
    description &&
    description.split("\n").map((text) => {
      return (
        <p
          dangerouslySetInnerHTML={{ __html: text }}
          className={s.text}
          key={text}
        />
      );
    });
  const checkIsBackground = (): CSSProperties => {
    if (image && image.name) {
      return {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.name}) no-repeat center / cover`,
      };
    } else
      return {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      };
  };
  return (
    <>
      <div className={s.coverFirstBlogComponent} id={id}>
        <div className={s.FirstBlogComponentBg} style={checkIsBackground()}>
          <div className={s.FirstBlogComponent}>
            <h1>{headline}</h1>
            <hr className={s.hrYellow} />
          </div>
        </div>

        <div className={s.coverText}>{onePar}</div>
      </div>
    </>
  );
}
