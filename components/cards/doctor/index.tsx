"use client";

import { Coins, FirstAidKit, MapPin, SealCheck, Star } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import IDoctor from '@/types/doctor';
import getAverageRating from '@/utilities/get-average-ratings';
import getCurrencyFormat from '@/utilities/get-currency-format';
import './styles.css';

type Props = {
	doctor: IDoctor;
};

export default function DoctorCard({ doctor }: Props) {
	return (
		<Link href={`/doctors/${doctor.id}`} className='doctor-card'>
			<div className="image">
				<Image src={`/assets/images/users/${doctor.image}`} alt={`Dr. ${doctor.name}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
			</div>
			{doctor.reviews && <div id="rating">{getAverageRating(doctor.reviews.map((review) => review.rate))} <Star weight='fill' /></div>}
			<span id="name-verification">
				<h6 title={`Dr. ${doctor.name}`}>Dr. {doctor.name}</h6>
				{doctor.verified && <SealCheck weight='fill' />}
			</span>
			<ul className='entries'>
				<li><FirstAidKit weight='fill' /> {doctor.specialization}</li>
				<li><MapPin weight='fill' /> {doctor.location.city}, {doctor.location.state}, {doctor.location.country}</li>
				<li><Coins weight='fill' /> {getCurrencyFormat(doctor.priceRange.from)} ~ {getCurrencyFormat(doctor.priceRange.to)}</li>
			</ul>
		</Link>
	);
}
