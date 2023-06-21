"use client";

import { PaperPlaneTilt } from '@phosphor-icons/react';
import { useState } from 'react';
import Anchor from '../anchor';
import ActionInput from '../inputs/action';
import TextsJSON from '@/public/data/texts.json';
import './styles.css';

export default function Footer() {
	const [data, setData] = useState({ email: "" });

	async function subscribe() {
		if (!data.email) return alert("Email address must be provided");

		const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
		const isValidEmail = regex.test(data.email);
		if (!isValidEmail) return alert("Email address must be provided valid");

		if (!confirm(TextsJSON.newsletter)) return;
		alert(`${data.email} has subscribed successfully`);
	}

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
				<h6>Newsletter</h6>
				<ActionInput name='email' placeholder='Email address' setter={setData} action={subscribe} icon={<PaperPlaneTilt />} />
				<Anchor to='https://www.linkedin.com/in/saifeldeenessam/' label={{ suffix: "Designed and developed by", text: "Saif Essam" }} noReferrer />
			</section>
		</footer>
	);
}