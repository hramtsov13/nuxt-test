import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['**/test/unit/**'],

		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'lcov'],
		},
	},
});
