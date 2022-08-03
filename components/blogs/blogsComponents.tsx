import BlogsProvider from "../../context/blogsContext/blogsContext";
import InputFields from "./inputFields/inputFields";
import OutputView from "./outputView/outputView";
import s from "./blogsComponents.module.css";

export default function BlogsComponents() {
  return (
    <BlogsProvider>
      <div className={s.bodyWrap}>
        <InputFields />
        <OutputView />
      </div>
    </BlogsProvider>
  );
}
