import { ChangeEvent, Dispatch } from "react";

export enum types_blocks_for_blogs {
  MAIN_BLOCK = "main_block",
  DEFAULT_BLOCK = "default_block",
  YOU_MAY_ALSO_LIKE = "you_may_also_like",
  PRICES_BLOCK = "prices_block",
  META_TAGS = "meta_tags",
}
export type blocks_type = {
  [key: string]: any;
  block_type: string;
  block_name: string;
  name: string;
  // deleting: boolean,
  headline?: string;
  description?: string;
  bodyText?: string;
  lastText?: string;
  image?: {
    name: string;
    alt: string;
    title: string;
  };
  list?: string;
  id?: string;

  meta_tag_description?: string;
  meta_tag_title?: string;
  schema_script?: string;
  global_script?: string;
  date_when_will_post_blog?: string;
  categoric?: string;
  url_for_blog?: string;
  is_posted?: boolean;

  styles?: styles_property;
};
export type methods_for_blogs = {
  state: block_type_object;
  dispatch: Dispatch<ActionsTypesBlogContext>;
  addBlockByType: (block_name: string, block: any) => void;
  setValueByField: (
    name_obj: string,
    key_field: string,
    value: string | boolean
  ) => void;
  uploadFileContext: (type_block: string, file: File | null) => void;
  changeStylesByBlockName: (
    name_obj: string,
    type_block: string,
    value: number | boolean | null
  ) => void;
  removeBlockByName: (block_name: string) => void;
  setAttributesImageByBlockName: (
    main_block_name: string,
    field_name: string,
    value: string
  ) => void;
  updateBlockPosition: (block: block_type_object) => void;
  switchBlocksPosition: (draggle_block: string, on_enter_block: string) => void;
  setAllFields: (block: block_type_object) => void;
};

export enum ActionsCreateBlogContext {
  SET_NEW_BLOCK_TYPE_VALUE = "set new block type value",
  SET_FIELDS_BY_OBJECT_NAME = "set fields by object name",
  UPLOAD_PHOTO_BY_TYPE_BLOCK = "upload photo by type block",
  CHANGE_STYLE_PROPERTY = "change style property",
  REMOVE_BLOCK_BY_BLOCK_NAME = "remove block by block name",
  SET_IMAGE_ATTRIBUTES_BY_BLOCK_NAME = "set image attributes by block name",
  UPDATE_BLOCKS_POSITION = "update block position",
  SWITCH_POSITION_IN_OBJECT = "switch position in object",
  SET_ALL_FIELDS = "set all fields",
}

export type block_type_object = {
  [key: string]: blocks_type;
};

export type ActionsTypesBlogContext =
  | setNewBlockToArray
  | setValueByObjectName
  | uploadFileByBlockName
  | setStyleProperties
  | removeBlockByBlockName
  | setImageAttributesByBlockName
  | updateBlockPosition
  | setNewPositionForBlock
  | setAllFields;

interface setNewBlockToArray {
  type: ActionsCreateBlogContext.SET_NEW_BLOCK_TYPE_VALUE;
  payload: {
    block: blocks_type;
    block_name: string;
  };
}
interface setNewPositionForBlock {
  type: ActionsCreateBlogContext.SWITCH_POSITION_IN_OBJECT;
  payload: {
    draggle_block: string;
    on_enter_block: string;
  };
}
interface updateBlockPosition {
  type: ActionsCreateBlogContext.UPDATE_BLOCKS_POSITION;
  payload: {
    block: block_type_object;
  };
}

interface setValueByObjectName {
  type: ActionsCreateBlogContext.SET_FIELDS_BY_OBJECT_NAME;
  payload: {
    name_obj: string;
    key_field: string;
    value: string | boolean;
  };
}

interface setStyleProperties {
  type: ActionsCreateBlogContext.CHANGE_STYLE_PROPERTY;
  payload: {
    name_obj: string;
    type_block: string;
    value: number | boolean | null;
  };
}

interface uploadFileByBlockName {
  type: ActionsCreateBlogContext.UPLOAD_PHOTO_BY_TYPE_BLOCK;
  payload: {
    file: File | null;
    type_block: string;
  };
}

interface removeBlockByBlockName {
  type: ActionsCreateBlogContext.REMOVE_BLOCK_BY_BLOCK_NAME;
  payload: {
    block_name: string;
  };
}

interface setImageAttributesByBlockName {
  type: ActionsCreateBlogContext.SET_IMAGE_ATTRIBUTES_BY_BLOCK_NAME;
  payload: {
    main_block_name: string;
    field_name: string;
    value: string;
  };
}

interface setAllFields {
  type: ActionsCreateBlogContext.SET_ALL_FIELDS;
  payload: {
    data: block_type_object;
  };
}
export type styles_property = {
  add_top_need_more_info_button?: boolean;
  add_bottom_need_more_info_button?: boolean;
  first_list_number_list?: boolean;
  main_list_number_list?: boolean;
  last_list_number_list?: boolean;
  body_grid_revers?: boolean;
  turn_padding_top?: boolean;
  turn_padding_bottom?: boolean;
  first_text_grid_revers?: boolean;
  body_text_grid_revers?: boolean;
  last_text_grid_revers?: boolean;
  background_exists?: boolean;
  first_list_grid_quantity_columns?: number;
  main_list_grid_quantity_columns?: number;
  last_list_grid_quantity_columns?: number;
};
export type checkbox_props = {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
};
export type text_area_props = {
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
};
