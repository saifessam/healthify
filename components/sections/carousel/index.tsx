"use client";

import useWindowSize from '@/hooks/window-size';
import { ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import Button from '../../button';
import './styles.css';

type Props = {
	title: string;
	children: ReactNode;
};

export default function CarouselSection({ title, children }: Props) {
	const windowWidth = useWindowSize();
	const [offset, setOffset] = useState<number>(0);
	const [isDisabled, setIsDisabled] = useState<{ previous: boolean; next: boolean; }>({ previous: true, next: false });
	const slides = useRef<HTMLDivElement>(null);
	const carousel = useRef<HTMLDivElement>(null);
	const divider = useMemo(() => windowWidth.width! < 768 ? 2 : windowWidth.width! >= 768 && windowWidth.width! < 1024 ? 3 : 4, [windowWidth.width]);
	const gap = 12;

	useEffect(() => {
		const cards = slides.current?.childNodes as NodeListOf<HTMLDivElement>;
		cards.forEach((card) => card.style.width = `${(carousel.current!.clientWidth / divider) - gap}px`);
	}, [windowWidth.width]);

	useEffect(() => {
		if (offset === 0) return setIsDisabled((prev) => ({ ...prev, previous: true }));
		if (offset > 0) setIsDisabled((prev) => ({ ...prev, previous: false }));
	}, [offset]);

	function prev() {
		const cards = slides.current?.childNodes as NodeListOf<HTMLDivElement>;
		const cardWidth = cards[0].offsetWidth;

		if (offset === 0) return;

		setOffset((prev: number) => prev -= (cardWidth * divider) + (gap * divider));
	}

	function next() {
		const cards = slides.current?.childNodes as NodeListOf<HTMLDivElement>;
		const cardWidth = cards[0].offsetWidth;

		if (cards.length <= divider) return setIsDisabled((prev) => ({ ...prev, next: true }));

		setOffset((prev: number) => prev = prev + (cardWidth * divider) + (gap * divider));
	}

	return (
		<section id='carousel'>
			<div className="header">
				<h4>{title}</h4>
				<Button style={{ theme: 'secondary', shape: 'normal', outlined: false, small: true }} content={<>View more <ArrowRight /></>} href='/doctors' />
			</div>
			<div className='carousel' ref={carousel}>
				<Button style={{ theme: 'primary', shape: 'circular', outlined: false, small: true, disabled: isDisabled.previous }} className="arrow left" content={<CaretLeft weight='bold' />} action={prev} />
				<div className="slides" style={{ translate: -offset, gap }} ref={slides}>{children}</div>
				<Button style={{ theme: 'primary', shape: 'circular', outlined: false, small: true, disabled: isDisabled.next }} className="arrow right" content={<CaretRight weight='bold' />} action={next} />
			</div>
		</section>
	);
}
