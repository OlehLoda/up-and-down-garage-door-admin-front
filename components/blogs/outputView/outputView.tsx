import { useBlogsContext } from "../../../context/blogsContext/blogsContext";
import BlogComponents from "./BlogComponents/blogComponents";
import s from "./outputView.module.css";

export default function OutputView() {
  const { state } = useBlogsContext();
  return (
    <div className={s.wrapOutputView}>
      <BlogComponents data={Object.values(state)} />
    </div>
  );
}
