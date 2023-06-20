import { X } from '@phosphor-icons/react';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../../hooks/typed-selector';
import layoutReducer from '../../../redux/reducers/layout';
import { AppDispatch } from '../../../types/redux';
import Button from '../../button';
import Form from '../../from';
import RadioInput from '../../inputs/radio';
import './styles.css';

export default function FiltersSection() {
	const [data, setData] = useState({ verified: false });
	const { isFiltersVisible } = useTypedSelector((state) => state.layoutReducer.value);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (isFiltersVisible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.removeAttribute("style");
		}
	}, [isFiltersVisible]);

	async function onSubmit(e: SyntheticEvent) {
		e.preventDefault();
		dispatch(layoutReducer.actions.hideFilters());
	};

	return (
		<div id="filters" className={isFiltersVisible ? "visible" : undefined}>
			<Button condition='primary' icon={<X weight='bold' />} action={() => dispatch(layoutReducer.actions.hideFilters())} />
			<Form title='Filters' onSubmit={(e: SyntheticEvent) => onSubmit(e)}>
				<RadioInput name={'verified'} label='Show verified only' isChecked={data.verified} setter={setData} />
			</Form>
		</div>
	);
}
