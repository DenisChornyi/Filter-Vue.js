<template>
    <div>
        <h1>{{getItem.title}}</h1>
        <p>{{getItem.body}}</p>
        <h3>Коментарии</h3>
        <ul>
            <li v-for="comment in comments " :key="comment.id">
                <span>{{comment.email}}</span>
                <h4>{{comment.name}}</h4>
                <p>{{comment.body}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters, mapActions} from 'vuex';

  export default {
    data: function () {
      return {
        comments: []
      }
    },

    created() {
      this.getAllItems()
      let todoId = this.$route.params.id
      axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + todoId).then((response) => {
        this.comments = response.data
      }).catch((error) => {
        throw error
      })
    },
    computed: {
      ...mapGetters({
        todos: 'getItem'
      }),
      getItem() {
        let todoId = this.$route.params.id
        let todo = this.todos.find(function (item) {
          return item.id == todoId;
        });
        return todo
      },

    },
    methods: {
      ...mapActions({
        getAllItems: 'getAllItems',
      }),
    }

  }

</script>