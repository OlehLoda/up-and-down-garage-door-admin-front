import { ReactElement } from "react";
import s from "./needMoreInfoButton.module.css";
import { useRouter } from "next/router";
import CallIconLightBlue from "../../../../../../../public/image/CallIconLightBlue.svg";
import phones from "./phone.json";

export default function NeedMoreInfoButton(): ReactElement {
  const router = useRouter();
  // const generatePhone = () => {
  //   const currentPage = router.pathname.substring(1, 3);
  //   return phones[currentPage] ? phones[currentPage] : phones.default;
  // };
  return (
    <a
      // href={"tel:" + generatePhone().phone}
      className={s.moreInfoButton}
    >
      <p className={s.coverButtonText}>Need more information?</p>
      <p className={s.coverLink}>
        {/* <img src={CallIconLightBlue} loading="lazy" alt="Call icon" /> Call us */}
        to get a free quote
      </p>
    </a>
  );
}
