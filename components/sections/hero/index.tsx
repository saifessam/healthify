import TextsJSON from '@/public/data/texts.json';
import Button from '../../button';
import './styles.css';

export default function HeroSection() {

	return (
		<section id='hero'>
			<article>
				<div className="headings">
					<h1>{TextsJSON.hero["title"]}</h1>
					<h4>{TextsJSON.hero["sub-title"]}</h4>
				</div>
				<p>{TextsJSON.hero["paragraph"]}</p>
				<Button style={{ theme: "primary", shape: "normal", bordered: false }} content={'Explore doctors'} href='/doctors' />
			</article>
		</section>
	);
}