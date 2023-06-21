import TextsJSON from '@/public/data/texts.json';
import Button from '../../button';
import './styles.css';

export default function CallToActionSection() {
	return (
		<section id='call-to-action'>
			<h3>{TextsJSON.callToAction}</h3>
			<Button style={{ theme: "primary", shape: "normal", outlined: false }} content={'Let’s do it now'} href='/account/sign-up' />
		</section>
	);
}
