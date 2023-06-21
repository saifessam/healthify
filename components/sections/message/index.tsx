import { ReactNode } from 'react';
import Button from '../../button';
import './styles.css';

type Props = {
	icon: ReactNode;
	messages: string[];
	redirect?: {
		to: string;
		label: string;
	};
};

export default function MessageSection({ icon, messages, redirect }: Props) {
	return (
		<section id='message'>
			<article>
				{icon}
				<pre>{messages.join('\r\n')}</pre>
			</article>
			{redirect && <Button style={{ theme: 'primary', shape: 'normal', outlined: true }} content={redirect.label} href='redirect.to' />}
		</section>
	);
}