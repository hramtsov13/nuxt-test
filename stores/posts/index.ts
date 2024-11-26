import { defineStore } from 'pinia';
import type { Post, State, User } from './types';

const usePostsStore = defineStore({
	id: 'posts',

	state: (): State => {
		return {
			posts: [],
			users: [],
		};
	},

	actions: {
		fetchAllPosts: async function () {
			const data = await $fetch<Array<Post>>('/api/posts');

			if (data) {
				this.posts = data;
			}
		},

		fetchAllUsers: async function () {
			const data = await $fetch<Array<User>>('/api/users');

			if (data) {
				this.users = data;
			}
		},
	},

	getters: {
		getPostsValue: (state: State) => state.posts,
	},
});

export default usePostsStore;
