import { useHttpClient } from 'HttpClient/http-client';

const FETCH_JOKES_CATEGORIES = async ({ commit }) => {
  const httpClient = useHttpClient();
  const { data: jokesCategories } = await httpClient.$http.request({
    url: 'categories',
  });
  commit('SET_JOKES_CATEGORIES', jokesCategories);
};

export default {
  FETCH_JOKES_CATEGORIES,
};
