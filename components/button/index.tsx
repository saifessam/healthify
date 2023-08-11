'use client';

import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

type Props = {
	variant: 'default' | 'filled' | 'outlined';
	style: 'special' | 'primary' | 'secondary' | 'success' | 'fail' | 'info';
	disabled?: boolean;
	onClick?: () => void;
	href?: string;
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
	label?: string;
};

export default function Button({ variant, style, disabled, onClick, href, startIcon, endIcon, label }: Props) {
	const router = useRouter();

	function getClassNames(): string[] {
		const classNames = [styles['button']];
		classNames.push(styles[variant]);
		classNames.push(disabled ? styles['disabled'] : styles[style]);
		label && classNames.push(styles['text-button']);
		return classNames;
	}

	function handleClick(): void {
		if (href) return router.push(href);
		if (onClick) return onClick();
	}

	return (
		<button className={getClassNames().join(' ')} disabled={disabled} onClick={handleClick}>
			{startIcon}
			{label && <span>{label}</span>}
			{endIcon}
		</button>
	);
}
