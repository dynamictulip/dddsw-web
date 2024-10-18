import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';
import { Config } from '@sveltejs/kit';

const config: Config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;