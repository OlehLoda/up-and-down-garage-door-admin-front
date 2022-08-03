import { ReactElement } from "react";
import { useBlogsContext } from "../../../../context/blogsContext/blogsContext";
import { styles_property } from "../../../../context/blogsContext/typesBlog";
import CheckBox from "../defaultInput/CheckBox/checkBox";
import DefaultInput from "../defaultInput/defaultInput";
import s from "./stylesBlocks.module.css";
type Props = styles_property & { name_block: string };
export default function StylesBlocks(props: Props): ReactElement {
  const {
    background_exists,
    body_grid_revers,
    name_block,
    add_top_need_more_info_button,
    add_bottom_need_more_info_button,
  } = props;
  const {
    last_list_grid_quantity_columns,
    main_list_grid_quantity_columns,
    first_list_grid_quantity_columns,
  } = props;
  const {
    main_list_number_list,
    last_list_number_list,
    first_list_number_list,
  } = props;
  const {
    body_text_grid_revers,
    last_text_grid_revers,
    first_text_grid_revers,
  } = props;
  const { turn_padding_top, turn_padding_bottom } = props;

  const { state, changeStylesByBlockName } = useBlogsContext();

  const formatName = (name: string) => {
    return name.replace(/_/gi, " ");
  };

  const getBlocksByObjectName = (key: string) => {
    switch (key) {
      case "add_top_need_more_info_button":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!add_top_need_more_info_button}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "add_bottom_need_more_info_button":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!add_bottom_need_more_info_button}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "background_exists":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!background_exists}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "body_grid_revers":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!body_grid_revers}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "first_text_grid_revers":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!first_text_grid_revers}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "body_text_grid_revers":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!body_text_grid_revers}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "last_text_grid_revers":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!last_text_grid_revers}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "turn_padding_top":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!turn_padding_top}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "turn_padding_bottom":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!turn_padding_bottom}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "first_list_number_list":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!first_list_number_list}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "main_list_number_list":
        return (
          <CheckBox
            name={formatName(key)}
            // name={formatName(key)}
            checked={!!main_list_number_list}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "last_list_number_list":
        return (
          <CheckBox
            name={formatName(key)}
            checked={!!last_list_number_list}
            onChange={(e) => {
              const { checked } = e.target;
              changeStylesByBlockName(key, name_block, checked);
            }}
          />
        );
      case "first_list_grid_quantity_columns":
        return (
          <DefaultInput
            name={formatName(key)}
            value={`${first_list_grid_quantity_columns}`}
            onChange={(e) => {
              const { value } = e.target;
              changeStylesByBlockName(
                key,
                name_block,
                +value.replace(/[^0-9]/gi, "")
              );
            }}
          />
        );
      case "main_list_grid_quantity_columns":
        return (
          <DefaultInput
            name={formatName(key)}
            value={`${main_list_grid_quantity_columns}`}
            onChange={(e) => {
              const { value } = e.target;
              changeStylesByBlockName(
                key,
                name_block,
                +value.replace(/[^0-9]/gi, "")
              );
            }}
          />
        );
      case "last_list_grid_quantity_columns":
        return (
          <DefaultInput
            name={formatName(key)}
            value={`${last_list_grid_quantity_columns}`}
            onChange={(e) => {
              const { value } = e.target;
              changeStylesByBlockName(
                key,
                name_block,
                +value.replace(/[^0-9]/gi, "")
              );
            }}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <div className={s.stylesBlocks}>
      {Object.keys(props).map((item) => {
        if (item !== "name_block")
          return (
            <div key={name_block + item}>{getBlocksByObjectName(item)}</div>
          );
      })}
    </div>
  );
}
