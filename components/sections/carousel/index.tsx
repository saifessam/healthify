"use client";

import { ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import Button from '../../button';
import './styles.css';

type Props = {
	title: string;
	children: ReactNode;
};

export default function CarouselSection({ title, children }: Props) {
	const [slidesWidth, setSlidesWidth] = useState<number>(0);
	const [cardWidth, setCardWidth] = useState<number>(0);
	const [offset, setOffset] = useState<number>(0);
	const slides = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const cards = slides.current?.childNodes as NodeListOf<HTMLDivElement>;
		setSlidesWidth(slides.current?.scrollWidth! - cards[0].clientWidth);
		setCardWidth(cards[0].clientWidth);
	}, []);

	function prev() {
		if (offset < slidesWidth) setOffset(prev => prev -= cardWidth);
	}

	function next() {
		if (offset >= 0) setOffset(prev => prev += cardWidth);
	}

	return (
		<section id='carousel'>
			<div className="header">
				<h4>{title}</h4>
				<Button condition='secondary' label={"View more"} icon={<ArrowRight />} href='/doctors' />
			</div>
			<div className='carousel'>
				<Button condition={'primary'} className="arrow left" disabled={offset === 0} icon={<CaretLeft weight='bold' />} action={prev} />
				<div className="slides" style={{ translate: -offset }} ref={slides}>{children}</div>
				<Button condition='primary' className="arrow right" disabled={offset >= (slidesWidth - cardWidth)} icon={<CaretRight weight='bold' />} action={next} />
			</div>
		</section>
	);
}
