"use client";

import useWindowSize from '@/hooks/window-size';
import CoinsIcon from "@/public/assets/svgs/icons/fill/coins.svg";
import MapPinIcon from "@/public/assets/svgs/icons/fill/map-pin.svg";
import StarIcon from "@/public/assets/svgs/icons/fill/star.svg";
import TextAlignLeftIcon from "@/public/assets/svgs/icons/fill/text-align-left.svg";
import Image from 'next/image';
import IDoctor from '../../types/doctor';
import getAverageRating from '../../utilities/get-average-ratings';
import getCurrencyFormat from '../../utilities/get-currency-format';
import Button from '../button';
import Review from '../tiles/review';
import './styles.css';

type Props = {
	doctor: IDoctor;
};

export default function DoctorProfile({ doctor }: Props) {
	const windowSize = useWindowSize();

	return (
		<div className="doctor-profile">
			{windowSize.width! >= 768 && <section id='image'><Image src={`/assets/images/users/${doctor.image}`} alt={doctor.name} fill /></section>}
			<section id='details'>
				<div className="header">
					{windowSize.width! < 768 && <div className="image"><Image src={`/assets/images/users/${doctor.image}`} alt={doctor.name} fill /></div>}
					<div>
						<h4>Dr. {doctor.name}</h4>
						<small>{doctor.specialization}</small>
					</div>
					{doctor.reviews && <small>{getAverageRating(doctor.reviews.map((review) => review.rate))} <StarIcon /></small>}
				</div>
				<div className="body">
					<ul>
						<li>
							<div>
								<MapPinIcon />
								<h6>Location</h6>
							</div>
							<small>{doctor.location.city}, {doctor.location.state}, {doctor.location.country}</small>
						</li>
						<li>
							<div>
								<CoinsIcon />
								<h6>Price Range</h6>
							</div>
							<small>{getCurrencyFormat(doctor.priceRange.from)} ~ {getCurrencyFormat(doctor.priceRange.to)}</small>
						</li>
						{doctor.bio &&
							<li>
								<div>
									<TextAlignLeftIcon />
									<h6>Bio</h6>
								</div>
								<small>{doctor.bio}</small>
							</li>
						}
					</ul>
					<Button style={{ theme: "primary", shape: "normal", outlined: false }} content={'Book now'} />
				</div>
				{doctor.reviews &&
					<div className="footer">
						<div className="header">Reviews</div>
						<ul className="body">{doctor.reviews.map((review) => <Review data={review} key={`DoctorReview(${review.id})`} />)}</ul>
					</div>
				}
			</section>
		</div>
	);
}
