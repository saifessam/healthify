import Link from 'next/link';
import { ReactNode } from 'react';
import './styles.css';

type Props = {
	type?: "button" | "submit";
	style: {
		theme: "primary" | "secondary";
		shape: "normal" | "circular";
		outlined: boolean;
		disabled?: boolean;
		small?: boolean;
	};
	content: ReactNode;
	className?: string;
	href?: string;
	action?(): void;
};

export default function Button({ type = "button", style, content, className, href, action }: Props) {
	function getClassNames(): string[] {
		const classNames: string[] = ["button", style.theme, style.shape];
		if (style.outlined) classNames.push("outlined");
		if (style.small) classNames.push("small");
		if (className) classNames.push(className);
		return classNames;
	}

	if (href) return <Link href={href} className={getClassNames().join(" ")}>{content}</Link>;
	return <button className={getClassNames().join(" ")} type={type} onClick={action} disabled={style.disabled}>{content}</button>;
}