"use client";

import BellFilled from '@/public/assets/svgs/icons/fill/bell.svg';
import HouseFilled from '@/public/assets/svgs/icons/fill/house.svg';
import StethoscopeFilled from '@/public/assets/svgs/icons/fill/stethoscope.svg';
import UserCircleFilled from '@/public/assets/svgs/icons/fill/user-circle.svg';
import Bell from '@/public/assets/svgs/icons/regular/bell.svg';
import House from '@/public/assets/svgs/icons/regular/house.svg';
import Stethoscope from '@/public/assets/svgs/icons/regular/stethoscope.svg';
import UserCircle from '@/public/assets/svgs/icons/regular/user-circle.svg';
import { usePathname } from 'next/navigation';
import Button from '../button';
import './styles.css';

export default function Navigator() {
	const pathname = usePathname();
	const buttons = [
		{ href: "/", content: pathname === "/" ? <HouseFilled /> : <House /> },
		{ href: "/notifications", content: pathname.startsWith("/notifications") ? <BellFilled /> : <Bell /> },
		{ href: "/doctors", content: pathname.startsWith("/doctors") ? <StethoscopeFilled /> : <Stethoscope /> },
		{ href: "/account/sign-in", content: pathname.startsWith("/account") ? <UserCircleFilled /> : <UserCircle /> },
	];

	return (
		<nav>
			{buttons.map((button, index) => (
				<Button style={{ theme: pathname === button.href ? "primary" : "secondary", shape: "circular", outlined: false }} content={button.content} href={button.href} key={`NavigatorButton(${index})`} />
			))}
		</nav>
	);
}
