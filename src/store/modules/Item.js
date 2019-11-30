import axios from 'axios'

export default {

  state: {
    items: [],
  },

  getters: {
    getItem: state => state.items,
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    deleteItem(state, id) {
      state.items = state.items.filter(function (item) {
        return item.id !== id;
      });
    }
  },
  actions: {
    getAllItems({commit}) {
      axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then(data => {
          let items = data.data
          commit('setItems', items)
        })
        .catch((error) => {
            throw error
          }
        )
    },
    deleteItem({commit}, id) {
      axios
        .delete('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(data => {
          commit('deleteItem', id)
        })
        .catch((error) => {
            throw error
          }
        )
    }
  }
}