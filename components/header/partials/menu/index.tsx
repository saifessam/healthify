"use client";

import { searchDoctors } from '@/app/api/users/route';
import TextInput from '@/components/inputs/text';
import DoctorTile from '@/components/tiles/doctor';
import IDoctor from '@/types/doctor';
import { Bell, House, Stethoscope, UserCircle } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../../../button';
import './styles.css';

type Props = {
	isVisible: boolean;
};

export default function Menu({ isVisible }: Props) {
	const [data, setData] = useState<{ term: string, results: IDoctor[]; message?: string; }>({ term: "", results: [], message: undefined });
	const pathname = usePathname();
	const buttons = [
		{ href: "/", label: "Home", icon: pathname === "/" ? <House weight='fill' /> : <House /> },
		{ href: "/notifications", label: "Notifications", icon: pathname === "/notifications" ? <Bell weight='fill' /> : <Bell /> },
		{ href: "/doctors", label: "Doctors", icon: pathname === "/doctors" ? <Stethoscope weight='fill' /> : <Stethoscope /> },
		{ href: "/account/sign-in", label: "Account", icon: pathname === "/account" ? <UserCircle weight='fill' /> : <UserCircle /> },
	];

	async function search(term: string) {
		const doctors: IDoctor[] | { message: string; } = await searchDoctors(term);
		if (Array.isArray(doctors)) {
			if (doctors.length > 0) {
				setData((prev: any) => ({ ...prev, results: doctors }));
			} else {
				setData((prev: any) => ({ ...prev, results: [] }));
			}
		} else {
			setData((prev: any) => ({ ...prev, message: doctors.message }));
		}
	}

	useEffect(() => {
		search(data.term);
		if (data.term === "") setData((prev: any) => ({ ...prev, message: undefined }));
	}, [data.term]);

	return (
		<aside className={isVisible ? "menu visible" : "menu"}>
			<TextInput name='term' placeholder='Search for doctor names' setter={setData} />
			{data.results.length > 0
				? <ul id='search-results'>
					{data.results.map((result) => <DoctorTile doctor={result} key={result.id} />)}
				</ul>
				: data.message &&
				<ul id='search-results'>
					<span>{data.message}</span>
				</ul>
			}
			<ul>{buttons.map((button, index) => <Button condition={pathname === button.href ? "primary" : "secondary"} label={button.label} icon={button.icon} href={button.href} key={`HeaderButton(${index})`} />)}</ul>
		</aside>
	);
}
