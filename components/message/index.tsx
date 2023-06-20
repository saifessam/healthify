import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import Button from '../button';
import './styles.css';

type Props = {
	icon: ReactNode;
	messages: string[];
	redirect?: {
		to: string;
		label: string;
	};
};

export default function Message({ icon, messages, redirect }: Props) {
	const router = useRouter();

	return (
		<section className='message'>
			<article>
				{icon}
				<pre>{messages.join('\r\n')}</pre>
			</article>
			{redirect && <Button condition='primary' action={() => router.push(redirect.to)} label={redirect.label} />}
		</section>
	);
}