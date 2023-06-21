import Anchor from '../anchor';
import './styles.css';

export default function Footer() {
	return (
		<footer>
			<section>
				<h6>Healthify © {new Date().getFullYear()}</h6>
				<ul>
					<li><Anchor to='#' label={{ text: "About us" }} /></li>
					<li><Anchor to='#' label={{ text: "Our team" }} /></li>
					<li><Anchor to='#' label={{ text: "Press" }} /></li>
				</ul>
			</section>
			<section>
				<h6>Help</h6>
				<ul>
					<li><Anchor to='#' label={{ text: "Medical Q&As" }} /></li>
					<li><Anchor to='#' label={{ text: "Contact us" }} /></li>
					<li><Anchor to='#' label={{ text: "Terms of use" }} /></li>
				</ul>
			</section>
			<section>
				<h6>Policies</h6>
				<ul>
					<li><Anchor to='#' label={{ text: "Privacy policy" }} /></li>
					<li><Anchor to='#' label={{ text: "Doctors Privacy Policy" }} /></li>
					<li><Anchor to='#' label={{ text: "Cookies settings" }} /></li>
				</ul>
			</section>
			<section id='newsletter'>
				<h6>Follow us</h6>
				<ul>
					<li><Anchor to='#' label={{ text: "Facebook" }} /></li>
					<li><Anchor to='#' label={{ text: "Instagram" }} /></li>
					<li><Anchor to='#' label={{ text: "LinkedIn" }} /></li>
				</ul>
			</section>
		</footer>
	);
}