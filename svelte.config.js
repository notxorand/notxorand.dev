import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries and mdsvex files.
		runes: ({ filename }) => {
			const isMdsvex = filename.endsWith('.md') || filename.endsWith('.svx');
			const isNodeModules = filename.split(/[\\/]/).includes('node_modules');
			if (isMdsvex || isNodeModules) return undefined;
			return true;
		}
	},
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			layout: {}
		})
	]
};

export default config;
