export default {
  async FETCH_JOKES_CATEGORIES({ commit }) {
    const { data: jokesCategories } = await this.$httpClient.instance.request({
      url: 'categories',
    });
    commit('SET_JOKES_CATEGORIES', jokesCategories);
  },
};
