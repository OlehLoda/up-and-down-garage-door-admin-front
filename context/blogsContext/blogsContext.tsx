import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  ActionsCreateBlogContext,
  blocks_type,
  block_type_object,
  methods_for_blogs,
  types_blocks_for_blogs,
} from "./typesBlog";
import BlogsReducer from "./blogsReducer";

interface Props {
  children: ReactNode;
}
const defaultValue: block_type_object = {
  ["meta_tag"]: {
    block_name: "meta_tag",
    name: "meta tags and scripts information",
    block_type: types_blocks_for_blogs.META_TAGS,
    deleting: false,
    meta_tag_description: "",
    meta_tag_title: "",
    schema_script: "",
    global_script: "",
    date_when_will_post_blog: "",
    categoric: "",
    url_for_blog: "",
    is_posted: false,
  },
};
const methods: methods_for_blogs = {
  state: defaultValue,
  dispatch: () => defaultValue,
  addBlockByType: () => null,
  setValueByField: () => null,
  uploadFileContext: () => null,
  changeStylesByBlockName: () => null,
  removeBlockByName: () => null,
  setAttributesImageByBlockName: () => null,
  updateBlockPosition: () => null,
  switchBlocksPosition: () => null,
  setAllFields: () => null,
};
export const BlogsContext = createContext(methods);
export const useBlogsContext = () => useContext(BlogsContext);

export default function BlogsProvider({ children }: Props) {
  const [state, dispatch] = useReducer(BlogsReducer, defaultValue);

  const addBlockByType = (block_name: string, block: blocks_type) => {
    dispatch({
      type: ActionsCreateBlogContext.SET_NEW_BLOCK_TYPE_VALUE,
      payload: { block_name, block },
    });
  };

  const setValueByField = (
    name_obj: string,
    key_field: string,
    value: string | boolean
  ) => {
    dispatch({
      type: ActionsCreateBlogContext.SET_FIELDS_BY_OBJECT_NAME,
      payload: { name_obj, key_field, value },
    });
  };
  const switchBlocksPosition = (
    draggle_block: string,
    on_enter_block: string
  ) => {
    dispatch({
      type: ActionsCreateBlogContext.SWITCH_POSITION_IN_OBJECT,
      payload: { draggle_block, on_enter_block },
    });
  };
  const updateBlockPosition = (block: block_type_object) => {
    dispatch({
      type: ActionsCreateBlogContext.UPDATE_BLOCKS_POSITION,
      payload: { block },
    });
  };

  const uploadFileContext = (type_block: string, file: File | null) => {
    dispatch({
      type: ActionsCreateBlogContext.UPLOAD_PHOTO_BY_TYPE_BLOCK,
      payload: { type_block, file },
    });
  };

  const changeStylesByBlockName = (
    name_obj: string,
    type_block: string,
    value: number | boolean | null
  ) => {
    dispatch({
      type: ActionsCreateBlogContext.CHANGE_STYLE_PROPERTY,
      payload: { name_obj, type_block, value },
    });
  };
  const removeBlockByName = (block_name: string) => {
    dispatch({
      type: ActionsCreateBlogContext.REMOVE_BLOCK_BY_BLOCK_NAME,
      payload: { block_name },
    });
  };
  const setAttributesImageByBlockName = (
    main_block_name: string,
    field_name: string,
    value: string
  ) => {
    dispatch({
      type: ActionsCreateBlogContext.SET_IMAGE_ATTRIBUTES_BY_BLOCK_NAME,
      payload: { main_block_name, field_name, value },
    });
  };
  const setAllFields = (data: block_type_object) => {
    dispatch({
      type: ActionsCreateBlogContext.SET_ALL_FIELDS,
      payload: { data },
    });
  };
  return (
    <BlogsContext.Provider
      value={{
        state,
        dispatch,
        setValueByField,
        uploadFileContext,
        addBlockByType,
        changeStylesByBlockName,
        removeBlockByName,
        setAttributesImageByBlockName,
        updateBlockPosition,
        switchBlocksPosition,
        setAllFields,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
}
