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
				<Button style={{ theme: 'secondary', shape: 'normal', bordered: false }} content={<>View more <ArrowRight /></>} href='/doctors' />
			</div>
			<div className='carousel'>
				<Button style={{ theme: 'primary', shape: 'circular', bordered: false, disabled: offset === 0 }} className="arrow left" content={<CaretLeft weight='bold' />} action={prev} />
				<div className="slides" style={{ translate: -offset }} ref={slides}>{children}</div>
				<Button style={{ theme: 'primary', shape: 'circular', bordered: false, disabled: offset >= (slidesWidth - cardWidth) }} className="arrow right" content={<CaretRight weight='bold' />} action={next} />
			</div>
		</section>
	);
}
