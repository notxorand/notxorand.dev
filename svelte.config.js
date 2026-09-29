import adapter from '@sveltejs/adapter-node';
import Prism from 'prismjs';
import 'prismjs/components/prism-rust.js';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-bash.js';
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
			layout: {},
			highlight: {
				optimise: false,
				highlighter(code, lang) {
					const language = lang === 'rs' ? 'rust' : lang && /^[\w-]+$/.test(lang) ? lang : 'plain';
					const grammar = Prism.languages[language];
					const highlighted = grammar
						? Prism.highlight(code, grammar, language)
						: code.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
					const svelteSafe = highlighted.replaceAll('{', '&#123;').replaceAll('}', '&#125;');

					return `<pre class="language-${language}"><code class="language-${language}">${svelteSafe}</code></pre>`;
				}
			}
		})
	]
};

export default config;
