import { ReactElement } from "react";
import { useBlogsContext } from "../../../../context/blogsContext/blogsContext";
import CheckBox from "../defaultInput/CheckBox/checkBox";
import DefaultInput from "../defaultInput/defaultInput";
import Textarea from "../defaultInput/Textarea/textarea";
import FileWithPreview from "../FileWithPreview/fileWithPreview";
import StylesBlocks from "../StylesBlocks/stylesBlocks";

export const formatName = (name: string) => {
  return name.replace(/_/gi, " ");
};
interface Props {
  line: string;
  block: string;
}

export default function GetInputByLine({ line, block }: Props): ReactElement {
  const { state, setValueByField } = useBlogsContext();
  switch (line) {
    case "meta_tag_description":
    case "description":
    case "body_text":
    case "last_text":
    case "list":
      return (
        <Textarea
          name={formatName(line)}
          value={state[block][line]}
          onChange={(e: any) => {
            const { value } = e.target;
            setValueByField(block, line, value);
          }}
        />
      );
    case "headline":
    case "meta_tag_title":
    case "schema_script":
    case "global_script":
    case "date_when_will_post_blog":
    case "categoric":
    case "url_for_blog":
      return (
        <DefaultInput
          value={state[block][line]}
          name={formatName(line)}
          type={"text"}
          global_block_name={block}
          name_object={line}
          onChange={(e: any) => {
            const { value } = e.target;
            setValueByField(block, line, value);
          }}
        />
      );
    case "image":
      return <FileWithPreview global_block_name={block} key_object={line} />;
    case "is_posted":
      return (
        <CheckBox
          name={formatName(line)}
          checked={state[block][line]!}
          onChange={(e) => {
            const { checked } = e.target;
            setValueByField(block, line, checked);
          }}
        />
      );
    case "styles":
      return <StylesBlocks {...state[block][line]} name_block={block} />;
    default:
      return <></>;
  }
}
