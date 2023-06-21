import CoinsIcon from "@/public/assets/svgs/icons/fill/coins.svg";
import FirstAidKitIcon from "@/public/assets/svgs/icons/fill/first-aid-kit.svg";
import MapPinIcon from "@/public/assets/svgs/icons/fill/map-pin.svg";
import SealCheckIcon from "@/public/assets/svgs/icons/fill/seal-check.svg";
import StarIcon from "@/public/assets/svgs/icons/fill/star.svg";
import IDoctor from '@/types/doctor';
import getAverageRating from '@/utilities/get-average-ratings';
import getCurrencyFormat from '@/utilities/get-currency-format';
import Image from 'next/image';
import Link from 'next/link';
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
			{doctor.reviews && <div id="rating">{getAverageRating(doctor.reviews.map((review) => review.rate))} <StarIcon /></div>}
			<span id="name-verification">
				<h6 title={`Dr. ${doctor.name}`}>Dr. {doctor.name}</h6>
				{doctor.verified && <SealCheckIcon />}
			</span>
			<ul className='entries'>
				<li><FirstAidKitIcon /> {doctor.specialization}</li>
				<li><MapPinIcon /> {doctor.location.city}, {doctor.location.state}, {doctor.location.country}</li>
				<li><CoinsIcon /> {getCurrencyFormat(doctor.priceRange.from)} ~ {getCurrencyFormat(doctor.priceRange.to)}</li>
			</ul>
		</Link>
	);
}
