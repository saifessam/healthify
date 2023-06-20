import Link from 'next/link';
import { ReactNode } from 'react';
import './styles.css';

type Props = {
	type?: "button" | "submit";
	condition: "primary" | "secondary" | "danger";
	label?: string;
	icon?: ReactNode;
	className?: string;
	disabled?: boolean;
	href?: string;
	action?(): void;
};

export default function Button({ type = "button", condition, label, icon, className, disabled, href, action }: Props) {
	function getClassNames(): string[] {
		const classNames: string[] = ["button"];

		if (condition) classNames.push(condition);
		if (className) classNames.push(className);

		return classNames;
	}

	if (href) return <Link href={href} className={getClassNames().join(" ")}>{label}{icon}</Link>;
	return <button className={getClassNames().join(" ")} type={type} onClick={action} disabled={disabled}>{label}{icon}</button>;
}