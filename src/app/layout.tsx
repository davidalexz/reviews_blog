import type { Metadata } from 'next';
import NavBar from '@/app/components/NavBar';
import { orbitron } from '@/app/fonts';
import './globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Indie Gamer',
		default: 'Indie Gamer',
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={orbitron.variable}>
			<body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
				<header>
					<NavBar />
				</header>

				<main className="grow py-3">{children}</main>
				<footer className="border-t py-3 text-center text-slate-500 text-xs">
					Game data and images provided by{' '}
					<a
						className="text-orange-800 hover:underline"
						href="https://rawg.io/apidocs"
						target="_blank"
					>
						RAWG
					</a>
				</footer>
			</body>
		</html>
	);
}
