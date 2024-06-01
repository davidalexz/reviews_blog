import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/app/components/Heading';
import type { Metadata } from 'next';
import { getFeaturedReview } from '../../lib/Reviews';

export default async function Home() {
	const review = await getFeaturedReview();
	return (
		<>
			<Heading>Indie gamer</Heading>
			<p className="pb-3">Only the best indie games here</p>
			<div className="bg-white border rounded shadow w-60 hover:shadow-xl sm:w-full">
				<Link href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row">
					<Image
						src={review.image}
						width={320}
						height={180}
						alt=""
						className="rounded-t sm:rounded-l sm:rounded-r-none"
					/>
					<h2 className="py-1 text-center font-semibold font-orbitron sm:px-2">{review.title}</h2>
				</Link>
			</div>
		</>
	);
}
