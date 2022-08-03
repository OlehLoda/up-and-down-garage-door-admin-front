import React from "react";
import { blocks_type } from "../../../../context/blogsContext/typesBlog";
import AllContentBlock from "../../inputFields/PreviewBlocks/AllContentBlock/allContentBlock";
interface Props {
  data: blocks_type[];
}
export default function BlogComponents({ data }: Props) {
  const getComponentByType = (
    block: blocks_type,
    key_object: string,
    block_name: string
  ) => {
    if (data) {
      return (
        <AllContentBlock
          block={block}
          key_object={key_object}
          block_name={block_name}
        />
      );
    } else return <></>;
  };
  const renderComponent = data.map((block: blocks_type) => {
    const { block_type, block_name } = block;
    return (
      <div className="coverComponent" key={Math.random()}>
        {getComponentByType(block, block_type, block_name)}
      </div>
    );
  });

  return <div>{renderComponent}</div>;
}
