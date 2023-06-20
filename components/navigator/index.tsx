"use client";

import { Bell, House, Stethoscope, UserCircle } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import Button from '../button';
import './styles.css';

export default function Navigator() {
	const pathname = usePathname();
	const buttons = [
		{ href: "/", content: <House weight={pathname === "/" ? 'fill' : "regular"} /> },
		{ href: "/notifications", content: <Bell weight={pathname.startsWith("/notifications") ? 'fill' : "regular"} /> },
		{ href: "/doctors", content: <Stethoscope weight={pathname.startsWith("/doctors") ? 'fill' : "regular"} /> },
		{ href: "/account/sign-in", content: <UserCircle weight={pathname.startsWith("/account") ? 'fill' : "regular"} /> },
	];

	return (
		<nav>
			{buttons.map((button, index) => (
				<Button style={{ theme: "secondary", shape: "circular", bordered: pathname !== button.href }} content={button.content} href={button.href} key={`NavigatorButton(${index})`} />
			))}
		</nav>
	);
}
