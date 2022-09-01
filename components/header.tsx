import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <span className={`inline-block mr-5 ${styles.akkis}`}>The</span>
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      .
    </h2>
  );
}
