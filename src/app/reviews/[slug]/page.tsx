import Image from 'next/image';
import Heading from '@/app/components/Heading';
import { getReview, getSlugs } from '../../../../lib/Reviews';
import ShareLinkButton from '@/app/components/ShareLinkButton';

type Params = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	const slugs = await getSlugs();
	return slugs.map((slug) => ({ slug }));
}

//generate dynamic metadata with generateMetadata
export async function generateMetadata({ params: { slug } }: Params) {
	//generateMetadata receives some pros
	const review = await getReview(slug);
	return {
		title: review.title,
	};
}

export default async function ReviewPage({ params: { slug } }: Params) {
	const review = await getReview(slug);

	return (
		<>
			<Heading>{review.title}</Heading>
			<div className="flex gap-3 items-baseline">
				<p className="italic pb-2">{review.date}</p>
				<ShareLinkButton />
			</div>
			<Image src={review.image} alt="img_logo" width={640} height={360} className="mb-2 rounded" />
			<article
				dangerouslySetInnerHTML={{ __html: review.body }}
				className="prose prose-slate max-w-screen-sm"
			/>
		</>
	);
}
