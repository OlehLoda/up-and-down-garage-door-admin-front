import s from "./defaultBlock.module.css";
import SwitchListToNumberTextBlock from "./SwitchListToNumberTextBlock/switchListToNumberTextBlock";
import TextBlockWithMap from "./TextBlockWithMap/textBlockWithMap";
import TitleHOne from "./TitleHOne/titleHOne";
import NeedMoreInfoButton from "./NeedMoreInfoButton/needMoreInfoButton";
import { blocks_type } from "../../../../../context/blogsContext/typesBlog";

interface Props {
  data: blocks_type;
  id: string;
}
export default function DefaultBlock({ data, id }: Props) {
  const {
    headline,
    description,
    body_text,
    image,
    list,
    last_text,
    last_list,
    first_list,
  } = data;
  const { name, alt = "preview photo", title = "preview photo" } = image!;

  const { add_top_need_more_info_button, add_bottom_need_more_info_button } =
    data.styles!;
  const { background_exists, body_grid_revers } = data.styles!;
  const {
    last_list_grid_quantity_columns,
    main_list_grid_quantity_columns,
    first_list_grid_quantity_columns,
  } = data.styles!;
  const {
    main_list_number_list,
    last_list_number_list,
    first_list_number_list,
  } = data.styles!;
  const {
    body_text_grid_revers,
    last_text_grid_revers,
    first_text_grid_revers,
  } = data.styles!;
  const { turn_padding_top, turn_padding_bottom } = data.styles!;

  return (
    <div className={`${s.block_container} background_block`} id={id}>
      <div className={`${s.coverComponent} add_padding_by_background_exist`}>
        {add_top_need_more_info_button && <NeedMoreInfoButton />}
        <TitleHOne headline={headline} />
        <TextBlockWithMap text={description} className={s.coverText} />
        <SwitchListToNumberTextBlock
          list={first_list}
          quantity_columns={first_list_grid_quantity_columns!}
          switch_to_number={first_list_number_list!}
          grid_revers={first_text_grid_revers!}
        />
        <div className={s.coverBody}>
          <div
            className={`${
              body_grid_revers ? s.coverTextBlockGrided : s.coverTextBlock
            } full_block_text`}
          >
            <TextBlockWithMap text={body_text} className={s.coverText} />
            <SwitchListToNumberTextBlock
              list={list}
              switch_to_number={main_list_number_list!}
              quantity_columns={main_list_grid_quantity_columns!}
              grid_revers={body_text_grid_revers!}
            />
          </div>
          {image && name && (
            <div
              className={`${
                body_grid_revers
                  ? s.coverTextBlockTwoGrided
                  : s.coverTextBlockTwo
              }`}
            >
              <img
                draggable="false"
                src={name}
                className={s.bodyImg}
                alt={alt as string}
                title={title as string}
              />
            </div>
          )}
        </div>
        {(last_text || last_list) && (
          <div className={s.coverLastBlock}>
            <TextBlockWithMap text={last_text} className={s.coverLastText} />
            <SwitchListToNumberTextBlock
              list={last_list}
              quantity_columns={last_list_grid_quantity_columns!}
              switch_to_number={last_list_number_list!}
              grid_revers={last_text_grid_revers!}
            />
          </div>
        )}
        {image && name && (
          <img
            draggable="false"
            className={s.mobileImage}
            src={name}
            alt={alt as string}
            title={title as string}
          />
        )}
        {add_bottom_need_more_info_button && <NeedMoreInfoButton />}
      </div>

      <style jsx>
        {`
          .background_block {
            background-color: ${background_exists ? "#F7F7F7" : "#FFFFFF"};
          }
          .full_block_text {
            grid-column-start: ${image?.name ? "unset" : "1"};
            grid-column-end: ${image?.name ? "unset" : "3"};
          }
          .add_padding_by_background_exist {
            padding-top: ${turn_padding_top ? "50px" : "0px"};
            padding-bottom: ${turn_padding_bottom ? "50px" : "0px"};
            padding-left: 20px;
            padding-right: 20px;
          }
          @media screen and (max-width: 1024px) {
            .full_block_text {
              grid-column-start: unset;
              grid-column-end: unset;
            }
            .add_padding_by_background_exist {
              padding-top: ${turn_padding_top ? "42px" : "0px"};
              padding-bottom: ${turn_padding_bottom ? "42px" : "0px"};
              padding-left: 20px;
              padding-right: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
