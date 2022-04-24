import { http } from '@/services/axios-instance';
import { AxiosResponse } from 'axios';
import { ICategoryGetResponse200 } from '../models/ICategoryGetResponse200';

export type CategoryResponse = AxiosResponse<ICategoryGetResponse200>;
export type CategoriesResponse = AxiosResponse<ICategoryGetResponse200[]>;

export const categoryService = {
  async get(filter: { id?: string; limit?: number }): Promise<CategoriesResponse> {
    const { id, limit } = filter;
    const url: string = id ? `/categories/${id}` : `/categories`;
    const response: AxiosResponse = await http.get(url);
    return response;
  }
};
