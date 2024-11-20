import { defineStore } from 'pinia';
import type { Post, State } from './types';

const usePostsStore = defineStore({
	id: 'posts',

	state: (): State => {
		return {
			posts: [],
		};
	},

	actions: {
		fetchAllPosts: async function () {
			const { apiEndpoint } = useRuntimeConfig().public;

			const { data } = await useFetch<Array<Post>>(`${apiEndpoint}/posts`);

			if (data.value) {
				this.posts = data.value;
			}
		},
	},

	getters: {
		getPostsValue: (state: State) => state.posts,
	},
});

export default usePostsStore;
