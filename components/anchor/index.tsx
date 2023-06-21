import Link from 'next/link';
import './styles.css';

type Props = {
	to: string;
	label: { suffix?: string; text: string; };
	noReferrer?: boolean;
};

export default function Anchor({ to, label, noReferrer }: Props) {
	return (
		<Link href={to} referrerPolicy={noReferrer ? 'no-referrer' : undefined} target={noReferrer ? '_blank' : undefined}>
			{label.suffix && <span>{label.suffix} &nbsp;</span>} {label.text}
		</Link>
	);
}
