import { Coins, MapPin, Star, TextAlignLeft } from '@phosphor-icons/react';
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
	return (
		<div className="doctor-profile">
			<div className="header">
				<div className="image">
					<Image src={`/assets/images/users/${doctor.image}`} alt={doctor.name} fill />
				</div>
				<div>
					<h4>Dr. {doctor.name}</h4>
					<small>{doctor.specialization}</small>
				</div>
				{doctor.reviews && <small>{getAverageRating(doctor.reviews.map((review) => review.rate))} <Star weight="fill" /></small>}
			</div>
			<div className="body">
				<ul>
					<li>
						<div>
							<MapPin weight='fill' />
							<h6>Location</h6>
						</div>
						<small>{doctor.location.city}, {doctor.location.state}, {doctor.location.country}</small>
					</li>
					<li>
						<div>
							<Coins weight='fill' />
							<h6>Price Range</h6>
						</div>
						<small>{getCurrencyFormat(doctor.priceRange.from)} ~ {getCurrencyFormat(doctor.priceRange.to)}</small>
					</li>
					{doctor.bio &&
						<li>
							<div>
								<TextAlignLeft weight='fill' />
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
		</div>
	);
}
