import { defineStore } from 'pinia';
import type { Post, State } from './types';

const usePostsStore = defineStore({
  id: 'posts',
  
  state: (): State => {
    return {
      posts: []
    }
  },

  actions: {
    getAllPosts: async function() {
      const { data } = await useFetch<Array<Post>>(`${process.env.NUXT_PUBLIC_API_ENDPOINT}/posts`); 
  
      if (data.value) {
        this.posts = data.value;
      }
    }
  },

  getters: {
    getPostsValue: (state: State) => state.posts
  }
});

export default usePostsStore;