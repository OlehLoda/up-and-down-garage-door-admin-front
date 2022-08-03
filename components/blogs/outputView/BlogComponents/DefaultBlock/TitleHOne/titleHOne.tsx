import { ReactElement } from 'react';
import s from './titleHOne.module.css';

interface Props {
  headline: string | undefined;
  className?: string;
}
export default function TitleHOne({ headline, className }: Props): ReactElement {
  if (headline) {
    return (
      <div className={`${s.coverTitle} ${className && className.length ? className : ''}`}>
        <h2>{headline}</h2>
        <hr />
      </div>
    )
  } else return <></>
}
