import { CheckCircle, Circle } from '@phosphor-icons/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './styles.css';

type Props = {
	name: string;
	label: string;
	isChecked: boolean;
	setter: Dispatch<SetStateAction<any>>;
};

export default function RadioInput({ name, label, setter, isChecked }: Props) {
	const [checked, setChecked] = useState<boolean>(isChecked);

	useEffect(() => {
		setter((current: any) => ({ ...current, [name]: checked }));
	}, [checked]);

	return (
		<div className={checked ? 'radio-input checked' : 'radio-input'} onClick={() => setChecked((prev: boolean) => !prev)}>
			{checked ? <CheckCircle weight='fill' /> : <Circle />}
			<small>{label}</small>
		</div>
	);
}
