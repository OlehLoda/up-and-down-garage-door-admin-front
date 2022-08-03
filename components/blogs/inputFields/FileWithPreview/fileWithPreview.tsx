import { ReactElement, useState } from "react";
import { useBlogsContext } from "../../../../context/blogsContext/blogsContext";
import s from "./fileWithPreview.module.css";

type Props = {
  global_block_name: string;
  key_object: string;
};
export default function FileWithPreview(props: Props): ReactElement {
  const { global_block_name, key_object } = props;
  const [open, setOpen] = useState(false);

  // const { state, uploadFileContext, setAttributesImageByBlockName } =
  //   useBlogsContext();
  // const { alt, title } = state[global_block_name].image!;

  return (
    <div className={s.fileWithPreview}>
      {/* {!state[global_block_name].file?.link && (
        <div className={s.wrapChoosePhoto} onClick={() => setOpen(!open)}>
          <ImagePreviewIcon className={s.imagePreviewIcon} />
          <p>choose image</p>
        </div>
      )} */}
      {/* {open && (
        <Gallery
          onClose={() => setOpen(false)}
          getUrl={(value) => {
            setAttributesImageByBlockName(global_block_name, "link", value);
          }}
        />
      )} */}
      {/* {state[global_block_name].file && state[global_block_name].file?.link && (
        <>
          <div className={s.coverPreview}>
            <img
              src={state[global_block_name].file!.link!}
              alt={state[global_block_name].file?.alt!}
            />
            <CrossIcon
              className={s.removeImage}
              onClick={() => uploadFileContext(global_block_name, null)}
            />
          </div>
          <div className={s.wrap}>
            <p>alt</p>
            <InputText
              value={alt!}
              onChange={(e) => {
                const { value } = e.target;
                setAttributesImageByBlockName(global_block_name, "alt", value);
              }}
            />
          </div>
          <div className={s.wrap}>
            <p>title</p>
            <InputText
              value={title!}
              onChange={(e) => {
                const { value } = e.target;
                setAttributesImageByBlockName(
                  global_block_name,
                  "title",
                  value
                );
              }}
            />
          </div>
        </>
      )} */}
    </div>
  );
}
