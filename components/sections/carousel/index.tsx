import Link from 'next/link';
import { ReactNode } from 'react';
import './styles.css';

type Props = {
	title: string;
	children: ReactNode;
};

export default function CarouselSection({ title, children }: Props) {
	return (
		<section id='carousel'>
			<h4>{title}</h4>
			<div className="body">
				{children}
				<Link href='/doctors' id="last">View more</Link>
			</div>
		</section>
	);
}
