import ITestimonial from '@/types/testimonial';
import TestimonialCard from '../../cards/testimonial';
import './styles.css';

type Props = {
	testimonials: ITestimonial[];
};

export default async function TestimonialsSection({ testimonials }: Props) {
	return (
		<section id='testimonials'>
			<h1>“What Clients Said”</h1>
			<ul>
				{testimonials.map((testimonial) => <TestimonialCard data={testimonial} key={`Testimonial(${testimonial.id})`} />)}
			</ul>
		</section>
	);
}