import s from './blogCard.module.css'
import Link from "next/link";
import { CSSProperties } from 'react';
// import { useRouter } from "next/router";

interface Props {
  title: string,
  info: string,
  url: string,
  date: string,
  path: string,
  typePage?: string
  visible?: boolean;
}

export default function BlogCard({ title, info, url, date, path, typePage, visible }: Props) {
  const visibleCardBlockForBlog: CSSProperties = visible && visible ? { display: 'none' } : { display: 'unset' }

  return (
    <Link href={"/blog/" + path + '/'} passHref>
      <a className={s.linkToBlogPage} rel="dofollow" style={visibleCardBlockForBlog}>
        <div className={typePage === 'member' ? s.MemberPageCard : s.card}>
          <img src={url} alt="blog photo" loading="lazy" />
          <div className={s.description}>
            <div className={s.textWrap}>
              <p>{title}</p>
              <p>{info}</p>
            </div>
            <div className={typePage === 'member' ? s.dateBlockMember : s.dateBlock}>
              <p>{date}</p>
              <p>read more</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}