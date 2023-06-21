"use client";

import { ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import Button from '../../button';
import './styles.css';
import useWindowSize from '@/hooks/window-size';

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
	const divider = useMemo(() => windowWidth.width! >= 768 && windowWidth.width! < 1024 ? 3 : windowWidth.width! >= 1024 ? 4 : 2, [windowWidth.width]);
	const gap = useMemo(() => divider === 2 ? 6 : 12, [divider]);

	useEffect(() => {
		const cards = slides.current?.childNodes as NodeListOf<HTMLDivElement>;
		cards.forEach((card) => card.style.width = `${carousel.current!.offsetWidth / divider - gap}px`);
	}, [windowWidth.width]);

	function prev() {
		if (offset === 0) return setIsDisabled((prev) => ({ ...prev, previous: true }));
		setIsDisabled((prev) => ({ ...prev, previous: false }));
		setOffset((prev) => prev -= carousel.current!.offsetWidth);
	}

	function next() {
		const cards = slides.current?.childNodes as NodeListOf<HTMLDivElement>;
		if (cards.length < divider) return setIsDisabled((prev) => ({ ...prev, previous: false, next: false }));

		const remainingWidth = slides.current!.clientWidth - (offset + carousel.current!.offsetWidth);
		if (remainingWidth <= 0) return setIsDisabled((prev) => ({ ...prev, next: true }));

		setIsDisabled((prev) => ({ ...prev, previous: false, next: false }));
		const newOffset = offset + carousel.current!.offsetWidth;
		setOffset(newOffset > slides.current!.clientWidth ? slides.current!.clientWidth - carousel.current!.offsetWidth : newOffset);
	}

	return (
		<section id='carousel'>
			<div className="header">
				<h4>{title}</h4>
				<Button style={{ theme: 'secondary', shape: 'normal', outlined: false, small: true }} content={<>View more <ArrowRight /></>} href='/doctors' />
			</div>
			<div className='carousel' ref={carousel}>
				<Button style={{ theme: 'primary', shape: 'circular', outlined: false, disabled: isDisabled.previous }} className="arrow left" content={<CaretLeft weight='bold' />} action={prev} />
				<div className="slides" style={{ translate: -offset }} ref={slides}>{children}</div>
				<Button style={{ theme: 'primary', shape: 'circular', outlined: false, disabled: isDisabled.next }} className="arrow right" content={<CaretRight weight='bold' />} action={next} />
			</div>
		</section>
	);
}
