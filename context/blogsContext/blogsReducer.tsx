import {
  ActionsCreateBlogContext,
  block_type_object,
  types_blocks_for_blogs,
} from "./typesBlog";

export default function BlogsReducer(state: block_type_object, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionsCreateBlogContext.SET_NEW_BLOCK_TYPE_VALUE:
      const { block, block_name } = action.payload;
      const new_block = {
        ...state,
        [block_name]: block,
      };
      Object.assign(state, new_block);

      return { ...state };
    case ActionsCreateBlogContext.SET_FIELDS_BY_OBJECT_NAME:
      const { name_obj, key_field, value } = action.payload;
      return {
        ...state,
        [name_obj]: { ...state[name_obj], [key_field]: value },
      };
    case ActionsCreateBlogContext.UPLOAD_PHOTO_BY_TYPE_BLOCK:
      const { type_block, file } = action.payload;
      if (file) {
        return {
          ...state,
          [type_block]: {
            ...state[type_block],
            file: {
              ...state[type_block].file,
              image: file,
              link: URL.createObjectURL(file),
            },
          },
        };
      } else
        return {
          ...state,
          [type_block]: {
            ...state[type_block],
            file: { ...state[type_block].file, image: file, link: file },
          },
        };
    case ActionsCreateBlogContext.CHANGE_STYLE_PROPERTY:
      const {
        type_block: type_block_styles,
        name_obj: object_name,
        value: value_property,
      } = action.payload;
      return {
        ...state,
        [type_block_styles]: {
          ...state[type_block_styles],
          styles: {
            ...state[type_block_styles].styles,
            [object_name]: value_property,
          },
        },
      };
    case ActionsCreateBlogContext.REMOVE_BLOCK_BY_BLOCK_NAME:
      const { block_name: remove_block } = action.payload;
      delete state[remove_block];
      return { ...state };
    case ActionsCreateBlogContext.SET_IMAGE_ATTRIBUTES_BY_BLOCK_NAME:
      const {
        main_block_name,
        field_name,
        value: value_attribute,
      } = action.payload;

      return {
        ...state,
        [main_block_name]: {
          ...state[main_block_name],
          file: {
            ...state[main_block_name].file,
            [field_name]: value_attribute,
          },
        },
      };
    case ActionsCreateBlogContext.UPDATE_BLOCKS_POSITION:
      const { block: update_block } = action.payload;
      return { ...update_block };

    case ActionsCreateBlogContext.SWITCH_POSITION_IN_OBJECT:
      const { draggle_block, on_enter_block } = action.payload;

      const find_draggle_element = state[draggle_block];
      const find_enter_element = state[on_enter_block];

      state[draggle_block] = find_enter_element;
      state[on_enter_block] = find_draggle_element;

      return { ...state };
    case ActionsCreateBlogContext.SET_ALL_FIELDS:
      const { data } = action.payload;
      return { ...data };
    default:
      return alert("There is no mathcing type in Blogs Reducer");
  }
}
