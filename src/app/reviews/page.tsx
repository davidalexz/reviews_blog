import Link from 'next/link';
import Heading from '@/app/components/Heading';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getReviews } from '../../../lib/Reviews';

export const metadata: Metadata = {
	title: 'Reviews',
};

export default async function ReviewsPage() {
	const reviews = await getReviews();

	return (
		<>
			<Heading>Reviews</Heading>
			<ul className="flex flex-row gap-3">
				{reviews.map((review) => (
					<li
						key={review.slug}
						className="bg-white border flex-wrap rounded shadow w-80 hover:shadow-xl"
					>
						<Image src={review.image} width={350} height={180} alt="" className="rounded-t" />
						<Link href={`/reviews/${review.slug}`}>
							<h2 className="py-1 text-center font-semibold font-orbitron">{review.title}</h2>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
