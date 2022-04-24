import { CategoriesResponse, categoryService } from '../services';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('categories', {
  state: (): any => {
    return {
      categories: [],
      error: '',
      loading: false
    };
  },

  actions: {
    async get(): Promise<void> {
      try {
        this.loading = true;
        const categoryResponse: CategoriesResponse = await categoryService.get({ limit: 10 });
        this.categories = categoryResponse.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  }
});
