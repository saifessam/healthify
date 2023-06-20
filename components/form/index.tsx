import { ReactNode, SyntheticEvent } from 'react';
import Anchor from '../anchor';
import Button from '../button';
import './styles.css';

type Props = {
	onSubmit: (e: SyntheticEvent) => void;
	title: string;
	children: ReactNode;
	links?: { to: string; label: { suffix?: string; text: string; }; }[];
};

export default function Form({ onSubmit, title, children, links }: Props) {
	return (
		<form onSubmit={onSubmit}>
			<div className="header">
				<h2>{title}</h2>
			</div>
			<div className="body">
				{children}
			</div>
			<div className="footer">
				<Button type='submit' style={{ theme: 'primary', shape: 'normal', bordered: false }} content={'Submit'} />
				{links && <div className={links.length > 1 ? "links" : "links centered"}>{links.map((link, index) => <Anchor to={link.to} label={link.label} key={`FormLink(${index})`} />)}</div>}
			</div>
		</form>
	);
}
