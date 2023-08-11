import { Pages } from '@/constants/enums';
import { headerContent } from '@/contents/header';
import Link from 'next/link';
import HeaderNav from './partials/nav';
import styles from './styles.module.css';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className={styles['header']}>
			<Link href={Pages.HOME}>{headerContent.logo}</Link>
			<HeaderNav />
		</header>
	);
}
