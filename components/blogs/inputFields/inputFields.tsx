import React, { useState } from "react";
import { useBlogsContext } from "../../../context/blogsContext/blogsContext";
import { blocks_type } from "../../../context/blogsContext/typesBlog";
import GetInputByLine from "./GetInputByLine/getInputByLine";
import s from "./inputFields.module.css";
import PreviewBlocks from "./PreviewBlocks/previewBlocks";
import WrapInputsIntoOneSection from "./WrapInputsIntoOneSection/wrapInputsIntoOneSection";

export default function InputFields() {
  const { state, addBlockByType } = useBlogsContext();
  const [openListBlocks, setOpenListBlogs] = useState(false);

  const addNewObjectToContext = (block: blocks_type | null) => {
    setOpenListBlogs(false);
    if (block) {
      const name_new_block = `${Date.now()}`;
      addBlockByType(name_new_block, { ...block, block_name: name_new_block });
    }
  };
  const [widht, setWidth] = useState(300);
  const handleChangeWidth = () => {
    if (widht === 0) setWidth(300);
    else setWidth(0);
  };

  return (
    <div className={s.wrap} style={{ width: `${widht}px` }}>
      <span
        draggable
        className={s.resizer}
        onDrag={(e) => {
          setWidth(e.pageX);
        }}
        onDragEnd={(e) => {
          e.preventDefault();
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onClick={handleChangeWidth}
      />
      <div
        className={s.wrapInputFields}
        style={{
          padding: `${widht === 0 ? "0px" : "20px 10px"}`,
        }}
      >
        {Object.keys(state).map((block, id) => {
          return (
            <WrapInputsIntoOneSection
              key={block + id + "block"}
              name={state[block].name}
              id={(state[block].name + id).replace(/ /gi, "_")}
            >
              {Object.keys(state[block]).map((line, id) => {
                if (
                  line !== "block_name" &&
                  line !== "name" &&
                  line !== "block_type" &&
                  line !== "id" &&
                  line !== "deleting"
                ) {
                  return (
                    <GetInputByLine key={line + id} line={line} block={block} />
                  );
                }
              })}
            </WrapInputsIntoOneSection>
          );
        })}
        <button
          className={s.newBlockButton}
          onClick={() => setOpenListBlogs(!openListBlocks)}
        >
          Add new block +
        </button>
        {openListBlocks && (
          <PreviewBlocks
            onClick={(value, block) => {
              addNewObjectToContext(block);
            }}
          />
        )}
      </div>
    </div>
  );
}
