"use client";

import { List, X } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../button';
import Menu from './partials/menu';
import './styles.css';

export default function Header() {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	function toggleMenu() {
		setIsMenuVisible((prev) => prev = !prev);
	}

	return (
		<header>
			<Link href={"/"}>
				<Image src={"/assets/svgs/logo.svg"} alt='Healthify' fill />
			</Link>
			<Button condition="secondary" icon={isMenuVisible ? <X weight='bold' /> : <List weight='bold' />} action={toggleMenu} />
			<Menu isVisible={isMenuVisible} />
		</header>
	);
}