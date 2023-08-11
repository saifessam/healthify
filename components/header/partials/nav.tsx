'use client';

import Button from '@/components/button';
import { headerContent } from '@/contents/header';

type Props = {};

function HeaderNav({}: Props) {
	return (
		<nav>
			{headerContent.buttons.map((button) => (
				<Button variant="default" style="secondary" label={button.title} href={button.href} key={button.title} />
			))}
			<form>
				<Button variant="outlined" style="primary" onClick={() => alert('Searching...')} startIcon={headerContent.search.icon} />
			</form>
		</nav>
	);
}

export default HeaderNav;
