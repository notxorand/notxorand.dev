import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = import.meta.glob('./**/*.svx', { eager: true });
	const allPosts = Object.entries(posts).map(([path, post]) => {
		// Extract the directory name instead of the filename
		const slug = path.split('/').slice(-2, -1)[0];
		return {
			slug,
			// @ts-ignore
			...post.metadata
		};
	});

	const sortedPosts = allPosts.sort((a, b) => {
		// @ts-ignore
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return {
		posts: sortedPosts
	};
};
