import Link from "next/link";
import columns, { DataBlock } from "./data";
import s from "./mainPageForCreateAndPublishBlogs.module.css";

export default function MainPageForCreateAndPublishBlogs() {
  return (
    <div className={s.mainPageForCreateAndPublishBlogsWrap}>
      <div className={s.mainPageForCreateAndPublishBlogs}>
        {columns.map((column, id) => {
          return (
            <div key={id} className={s.oneColumnWrap}>
              <h2>{column.headline}</h2>
              <div className={s.oneColumn}>
                {column.headline === "Created blogs" && (
                  <Link href="/blogs/create/" passHref>
                    <a className={s.coverCreateButton}>Create new blog +</a>
                  </Link>
                )}
                {column.items.map((item: DataBlock) => {
                  return (
                    <div className={s.coverOneBlog} key={item.id}>
                      <p>{item.id}</p>
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
