import { readdir, readFile } from 'node:fs/promises';
//list the files in the content/reviews with readdir
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getFeaturedReview() {
	const reviews = await getReviews();
	return reviews[0];
}

export async function getReview(slug: string) {
	const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8');
	const {
		content,
		data: { title, date, image },
	} = matter(text);
	const body = marked(content);
	return { slug, title, date, image, body };
}

export async function getReviews() {
	const slugs = await getSlugs();
	const reviews = [];
	for (const slug of slugs) {
		const review = await getReview(slug);
		reviews.push(review);
	}

	reviews.sort((a, b) => b.date.localeCompare(a.date));
	//date is string in the ISO format, so we can compare them alphabetically with localCompare
	return reviews;
}

export async function getSlugs() {
	const files = await readdir('./content/reviews');
	return files.filter((file) => file.endsWith('.md')).map((file) => file.slice(0, -'.md'.length));
}
