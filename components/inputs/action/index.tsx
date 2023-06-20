import { Dispatch, ReactNode, SetStateAction } from 'react';
import Button from '../../button';
import './styles.css';

type Props = {
	name: string;
	placeholder: string;
	setter: Dispatch<SetStateAction<any>>;
	action: () => void;
	icon: ReactNode;
};

export default function ActionInput({ name, placeholder, setter, action, icon }: Props) {
	return (
		<div className='action-input'>
			<input type='text' name={name} placeholder={placeholder} autoComplete='off' onChange={(e) => setter((prev: any) => ({ ...prev, [name]: e.target.value }))} />
			<Button style={{ theme: 'primary', shape: 'circular', bordered: false }} content={icon} action={action} />
		</div>
	);
}
