import { blocks_type } from "../../../../context/blogsContext/typesBlog";
import AllContentBlock from "./AllContentBlock/allContentBlock";
import { data } from "./allPreviewsData";
import s from "./previewBlocks.module.css";
import exitIconGrey from "../../../../public/image/exitIconGrey.svg";
interface Props {
  onClick: (close: boolean, block: blocks_type | null) => void;
}

export default function PreviewBlocks({ onClick }: Props) {
  return (
    <div className={s.chooseBlockBg}>
      <img
        className={s.exitIcon}
        src={exitIconGrey}
        alt="Exit Icon Grey"
        onClick={() => onClick(true, null)}
      />
      <div className={s.chooseBlockWrap}>
        <div className={s.chooseBlock}>
          {Object.values(data).map((block: any) => {
            const { block_type, block_name, id } = block;
            return (
              <div
                className={s.scaledBlock}
                key={block_name + block_type + id}
                onClick={() => onClick(false, block)}
              >
                <AllContentBlock
                  block={block}
                  block_name={block_name}
                  key_object={block_type}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
