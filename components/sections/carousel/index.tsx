import Button from '@/components/button';
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
				<Button style={{ theme: 'secondary', shape: "normal", outlined: false }} content={"View more"} href='/doctors' />
			</div>
		</section>
	);
}
