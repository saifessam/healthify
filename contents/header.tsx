import { Pages } from '@/constants/enums';
import { LogoSVG } from '@/utilities/exporter';
import SearchIcon from '@/public/assets/svgs/icons/outlined/MagnifyingGlass.svg';

export const headerContent = {
	logo: <LogoSVG />,
	buttons: [
		{ title: 'Home', href: Pages.HOME },
		{ title: 'Notifications', href: Pages.NOTIFICATIONS },
		{ title: 'Doctors', href: Pages.DOCTORS },
		{ title: 'Account', href: Pages.ACCOUNT }
	],
	search: {
		action: () => {},
		placeholder: 'What are you looking for?',
		icon: <SearchIcon />
	}
};
