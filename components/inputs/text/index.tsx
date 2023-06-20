import { Dispatch, SetStateAction } from 'react';
import './styles.css';

type Props = {
	name: string;
	placeholder: string;
	setter: Dispatch<SetStateAction<any>>;
	defaultValue?: string;
};

export default function TextInput({ name, placeholder, setter, defaultValue }: Props) {
	return (
		<input type='text' className='text-input' name={name} placeholder={placeholder} onChange={(e) => setter((prev: any) => ({ ...prev, [name]: e.target.value }))} defaultValue={defaultValue} />
	);
}
