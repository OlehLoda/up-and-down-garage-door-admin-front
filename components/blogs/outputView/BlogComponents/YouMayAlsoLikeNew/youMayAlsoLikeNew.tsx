import React from "react";
import s from "./youMayAlsoLike.module.css";

import BlogCard from "./blogCard/BlogCard";
import cardData from "./blogCard/blogData";
import YouMayAlso from "./youMayAlso";
import { block } from "@/types/types-blog";

interface Props {
  data: block;
  id: string;
}

export default function YouMayAlsoLikeNew({ data, id }: Props) {
  const searchByUrl = () => {
    const arrIndex: any[] = [];
    {
      data.list &&
        data.list.split("\n").forEach((path: string) => {
          const indexCard = cardData.findIndex((itm) => itm.path === path);
          arrIndex.push(indexCard);
        });
    }
    return arrIndex;
  };

  const oneCardNumber = searchByUrl().map((card, id) => {
    return (
      <div className={s.blogCard} key={id}>
        <BlogCard {...cardData[card]} />
      </div>
    );
  });
  return (
    <div className={s.youMayAlso} id={id}>
      <YouMayAlso title={data.headline}>{oneCardNumber}</YouMayAlso>
    </div>
  );
}
