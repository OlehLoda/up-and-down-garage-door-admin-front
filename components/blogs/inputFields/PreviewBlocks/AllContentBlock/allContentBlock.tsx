import {
  blocks_type,
  types_blocks_for_blogs,
} from "../../../../../context/blogsContext/typesBlog";
import { ReactElement } from "react";
import MainBlock from "../../../outputView/BlogComponents/MainBlock/mainBlock";
import YouMayAlsoLikeNew from "../../../outputView/BlogComponents/YouMayAlsoLikeNew/youMayAlsoLikeNew";
import DefaultBlock from "../../../outputView/BlogComponents/DefaultBlock/defaultBlock";

interface Props {
  block: blocks_type;
  key_object: string;
  block_name: string;
}
export default function AllContentBlock({
  block,
  key_object,
  block_name,
}: Props): ReactElement {
  switch (key_object) {
    case types_blocks_for_blogs.MAIN_BLOCK:
      return <MainBlock data={block} id={block_name} />;
    case types_blocks_for_blogs.DEFAULT_BLOCK:
      return <DefaultBlock data={block} id={block_name} />;
    case types_blocks_for_blogs.YOU_MAY_ALSO_LIKE:
      return <MainBlock data={block} id={block_name} />;
    case types_blocks_for_blogs.PRICES_BLOCK:
      return <MainBlock data={block} id={block_name} />;
    default:
      return <></>;
  }
}
