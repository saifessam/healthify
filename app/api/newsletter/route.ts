import TextsJSON from '@/public/data/texts.json';

export async function subscribe(data: { email: string; }) {
	if (!data.email) return alert("Email address must be provided");

	const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
	const isValidEmail = regex.test(data.email);
	if (!isValidEmail) return alert("Email address must be provided valid");

	if (!confirm(TextsJSON.newsletter)) return;
	alert(`${data.email} has subscribed successfully`);
}