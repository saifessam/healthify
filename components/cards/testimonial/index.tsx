import ITestimonial from '@/types/testimonial';
import Image from 'next/image';
import './styles.css';

type Props = {
	data: ITestimonial;
};

export default function TestimonialCard({ data }: Props) {
	return (
		<li className="testimonial">
			<div className="header">
				<div className="image">
					<Image src={`/assets/images/testimonials/${data.image}`} alt={data.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
				</div>
				<div>
					<span>{data.name}</span>
					<small>{data.date}</small>
				</div>
			</div>
			<p>{data.text}</p>
		</li>
	);
}