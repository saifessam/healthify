import Header from '@/components/header';
import { appMetaData } from '@/public/data/metadata';
import '@/public/styles/app.css';
import type { Metadata } from 'next';

type Props = {
	children: React.ReactNode;
};

export const metadata: Metadata = appMetaData;

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
