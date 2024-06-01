import Heading from '@/app/components/Heading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
};

export default function About() {
	return (
		<>
			<Heading>About</Heading>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</>
	);
}
