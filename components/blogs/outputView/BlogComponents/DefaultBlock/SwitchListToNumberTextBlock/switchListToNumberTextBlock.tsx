import { ReactElement } from 'react';
import s from './switchListToNumberTextBlock.module.css';
interface Props {
  list: string | undefined;
  switch_to_number: boolean;
  quantity_columns: number;
  grid_revers: boolean;
}
export default function SwitchListToNumberTextBlock({ list, switch_to_number, quantity_columns, grid_revers }: Props): ReactElement {
  if (list) {
    if (!switch_to_number) {
      return (
        <ul className={`${s.coverListBullet} list_bullet_or_number`} >
          <style jsx>
            {`
            .list_bullet_or_number {
              grid-template-columns: repeat(${quantity_columns > 0 ? quantity_columns : '1'}, 1fr);
              grid-row: ${grid_revers ? '1' : "unset"};
            }
            @media screen and (max-width: 1024px) {
              .list_bullet_or_number{
                grid-template-columns: 1fr;
                grid-row: unset;
              }
            }
          `}
          </style>
          {list.split("\n").map((text) => {
            return (
              <li
                key={Math.random()}
                className={s.listItem}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );
          })}
        </ul>
      );
    } else
      return (
        <ol className={`${s.coverListNumbers} list_bullet_or_number`} >
          <style jsx>
            {`
              .list_bullet_or_number {
                grid-template-columns: repeat(${quantity_columns ? quantity_columns : '1'}, 1fr);
                grid-row: ${grid_revers ? '1' : "unset"};
              }
              @media screen and (max-width: 1024px) {
                .list_bullet_or_number{
                  grid-template-columns: 1fr;
                  grid-row: unset;
                }
              }
          `}
          </style>
          {list.split("\n").map((text) => {
            return (
              <li
                key={Math.random()}
                className={s.orderedListItem}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );
          })}
        </ol>
      );
  } else {
    return <></>;
  }
}

// const renderListBullet = () => {
//   if (list) {
//     if (!main_list_number_list) {
//       return (
//         <ul className={`${s.coverListBullet} list_bullet_or_number`} >
//           <style jsx>
//             {`
//             .list_bullet_or_number {
//               grid-template-columns: repeat(${main_list_grid_quantity_columns ? main_list_grid_quantity_columns : '1'}, 1fr);
//               grid-row: ${body_text_grid_revers ? '1' : "unset"};
//             }
//             @media screen and (max-width: 1024px) {
//               .list_bullet_or_number{
//                 grid-template-columns: 1fr;
//                 grid-row: unset;
//               }
//             }
//           `}
//           </style>
//           {list.split("\n").map((text) => {
//             return (
//               <li
//                 key={Math.random()}
//                 className={s.listItem}
//                 dangerouslySetInnerHTML={{ __html: text }}
//               />
//             );
//           })}
//         </ul>
//       );
//     } else
//       return (
//         <ol className={`${s.coverListNumbers} list_bullet_or_number`} >
//           <style jsx>
//             {`
//               .list_bullet_or_number {
//                 grid-template-columns: repeat(${main_list_grid_quantity_columns ? main_list_grid_quantity_columns : '1'}, 1fr);
//                 grid-row: ${body_text_grid_revers ? '1' : "unset"};
//               }
//               @media screen and (max-width: 1024px) {
//                 .list_bullet_or_number{
//                   grid-template-columns: 1fr;
//                   grid-row: unset;
//                 }
//               }
//           `}
//           </style>
//           {list.split("\n").map((text) => {
//             return (
//               <li
//                 key={Math.random()}
//                 className={s.orderedListItem}
//                 dangerouslySetInnerHTML={{ __html: text }}
//               />
//             );
//           })}
//         </ol>
//       );
//   } else {
//     return null;
//   }
// };